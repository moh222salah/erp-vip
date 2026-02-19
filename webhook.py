from flask import Flask, request, jsonify
import hmac
import hashlib

app = Flask(__name__)

# السر المستخدم لتأمين الاتصال (يجب وضعه في Webhook Settings في ERPNext)
WEBHOOK_SECRET = "nordic_secure_token_2026"

def verify_signature(data, signature):
    """
    التحقق من صحة مصدر البيانات (Security Best Practice)
    معيار مشابه لـ Stripe Webhooks
    """
    check_hash = hmac.new(WEBHOOK_SECRET.encode(), data, hashlib.sha256).hexdigest()
    return hmac.compare_digest(check_hash, signature)

@app.route('/webhooks/erpnext', methods=['POST'])
def handle_erpnext_event():
    # 1. الحصول على التوقيع من الرأس (Header)
    signature = request.headers.get('X-Frappe-Signature')
    
    # 2. التحقق من أمان الطلب
    if not verify_signature(request.data, signature):
        return jsonify({"status": "unauthorized"}), 401

    # 3. معالجة البيانات القادمة من ERPNext
    event_data = request.json
    doc_id = event_data.get("name")
    new_status = event_data.get("status")

    print(f"🔔 Notification: Document {doc_id} updated to {new_status}")

    # 4. (التحديث اللحظي) إرسال إشعار للموقع عبر WebSocket أو تحديث قاعدة بيانات الموقع
    # update_website_ui(doc_id, new_status)

    return jsonify({"status": "received"}), 200

if __name__ == '__main__':
    app.run(port=5000)

