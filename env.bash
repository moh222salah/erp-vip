# --- Global Settings ---
PROJECT_NAME=nordic_biz_hub
ENVIRONMENT=production
DOMAIN_NAME=nordicbizhub.com

# --- ERPNext v16 Secrets ---
# توليد كلمات سر معقدة باستخدام: openssl rand -hex 16
DB_ROOT_PASSWORD=ae92f8b5d1...#_REDACTED
ERPNEXT_ADMIN_PASSWORD=admin_secure_pass_2026
ERPNEXT_API_KEY=your_generated_api_key
ERPNEXT_API_SECRET=your_generated_api_secret

# --- Middleware & Security ---
WEBHOOK_SECRET=nordic_secure_hmac_token_v1
JWT_SECRET_KEY=super_secret_jwt_for_middleware
POSTGRES_PASS=middleware_db_pass_9921

# --- SSL & Nginx Proxy ---
LETSENCRYPT_EMAIL=admin@nordicbizhub.com

