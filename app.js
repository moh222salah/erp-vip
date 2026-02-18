/* ═══════════════════════════════════════════════
   VIP ERP — APP.JS
   Enterprise Accounting System
   Version 1.0 · 2025
═══════════════════════════════════════════════ */

// ═══════════════════════════════════════
// 1. STATE
// ═══════════════════════════════════════
const state = {
  lang:  localStorage.getItem('erp_lang')  || (navigator.language.startsWith('ar') ? 'ar' : 'en'),
  theme: localStorage.getItem('erp_theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'),
  currentModule: 'dashboard',
  sidebarCollapsed: false
};

// ═══════════════════════════════════════
// 2. TRANSLATIONS
// ═══════════════════════════════════════
const T = {
  en: {
    search_placeholder: 'Search invoices, customers, reports... (Ctrl+K)',
    user_name: 'Mohammed Salah', user_role: 'System Admin',
    nav_main: 'MAIN', nav_people: 'PEOPLE', nav_analytics: 'ANALYTICS',
    nav_dashboard: 'Dashboard', nav_sales: 'Sales', nav_purchase: 'Purchase',
    nav_accounting: 'Accounting', nav_inventory: 'Inventory',
    nav_customers: 'Customers', nav_hr: 'HR & Payroll',
    nav_reports: 'Reports', nav_settings: 'Settings',
    company_name: 'Al-Rashidi Corp.', fiscal_year: 'FY 2025 · SAR',
    dash_title: 'Dashboard', dash_sub: 'Welcome back, Mohammed — here\'s your business at a glance',
    btn_quick_add: '+ Quick Add', btn_new_invoice: 'New Invoice',
    kpi_revenue: 'Total Revenue', kpi_invoices: 'Total Invoices',
    kpi_receivable: 'Outstanding AR', kpi_stock: 'Stock Items',
    vs_last: 'vs last month', overdue: 'overdue', low_stock: 'low stock',
    ch_revenue: 'Revenue & Expenses', ch_revenue_sub: 'Last 12 months',
    tab_monthly: 'Monthly', tab_quarterly: 'Quarterly',
    ch_breakdown: 'Revenue Breakdown', ch_breakdown_sub: 'By category',
    recent_tx: 'Recent Transactions', view_all: 'View All',
    quick_actions: 'Quick Actions',
    qa_invoice: 'New Invoice', qa_payment: 'Payment', qa_customer: 'Customer',
    qa_stock: 'Stock Entry', qa_journal: 'Journal Entry', qa_reports: 'Reports',
    ar_aging: 'AR Aging Summary', aging_current: 'Current',
    aging_30: '1-30 Days', aging_60: '31-60 Days', aging_over: '60+ Days',
    th_ref: 'Reference', th_party: 'Party', th_date: 'Date',
    th_amount: 'Amount', th_status: 'Status', th_actions: 'Actions',
    th_invoice: 'Invoice #', th_customer: 'Customer', th_due: 'Due Date',
    sales_title: 'Sales Management', sales_sub: 'Manage invoices, quotations & customer orders',
    btn_quotation: 'New Quotation',
    mtd_sales: 'MTD Sales', pending_inv: 'Pending', avg_invoice: 'Avg Invoice',
    needs_action: 'Needs action', sales_list: 'Sales Invoices',
    all_status: 'All Status', paid: 'Paid', unpaid: 'Unpaid',
    search_invoices: 'Search invoices...',
    showing_records: 'Showing 1-10 of 342 records',
    acc_title: 'Accounting', acc_sub: 'Chart of accounts, journal entries & financial overview',
    btn_journal: 'Journal Entry', btn_fin_reports: 'Financial Reports',
    kpi_assets: 'Total Assets', kpi_liabilities: 'Liabilities',
    kpi_equity: 'Equity', kpi_net_profit: 'Net Profit',
    coa_title: 'Chart of Accounts', btn_add_account: '+ Add Account',
    th_acc_code: 'Code', th_acc_name: 'Account Name', th_acc_type: 'Type',
    th_acc_balance: 'Balance', th_acc_group: 'Group',
    inv_title: 'Inventory Management', inv_sub: 'Real-time stock tracking across all warehouses',
    btn_stock_entry: 'Stock Entry', btn_add_item: 'Add Item',
    total_items: 'Total Items', low_stock_items: 'Low Stock', stock_value: 'Stock Value',
    reorder_needed: 'Reorder needed', item_list: 'Item List',
    all_warehouses: 'All Warehouses',
    th_item_code: 'Code', th_item_name: 'Item Name', th_warehouse: 'Warehouse',
    th_qty: 'Qty', th_unit_price: 'Unit Price', th_total_val: 'Total Value',
    cust_title: 'Customers & CRM', cust_sub: 'Manage your customer relationships',
    btn_add_customer: 'Add Customer',
    hr_title: 'HR & Payroll', hr_sub: 'Saudi labor law compliant — GOSI integrated',
    btn_run_payroll: 'Run Payroll', btn_add_employee: 'Add Employee',
    total_employees: 'Employees', payroll_cost: 'Payroll / Month',
    pending_leaves: 'Pending Leaves', for_approval: 'For approval', gosi_contrib: 'GOSI',
    employee_list: 'Employee List',
    th_emp_id: 'ID', th_emp_name: 'Name', th_department: 'Department',
    th_position: 'Position', th_salary: 'Salary', th_gosi: 'GOSI', 
    rep_title: 'Financial Reports', rep_sub: 'IFRS-compliant reports — Export to PDF & Excel',
    btn_export_pdf: 'Export PDF', btn_export_excel: 'Export Excel',
    rep_pl: 'Profit & Loss', rep_pl_desc: 'Income statement with YoY comparison',
    rep_bs: 'Balance Sheet', rep_bs_desc: 'Assets, liabilities & equity snapshot',
    rep_cf: 'Cash Flow', rep_cf_desc: 'Operating, investing & financing activities',
    rep_tb: 'Trial Balance', rep_tb_desc: 'Debit & credit balances verification',
    rep_vat: 'VAT Return', rep_vat_desc: 'ZATCA-compliant VAT return report',
    rep_ar: 'AR Aging', rep_ar_desc: 'Receivables aged by 30/60/90 days',
    pl_preview: 'P&L Preview — FY 2025',
    set_title: 'System Settings', set_sub: 'Configure your ERP environment',
    set_company: 'Company Profile', set_company_desc: 'Name, logo, CR number, fiscal year',
    set_currency: 'Currencies', set_currency_desc: 'Multi-currency & exchange rates',
    set_users: 'Users & Roles', set_users_desc: 'Permissions & access control',
    set_zatca: 'ZATCA E-Invoicing', set_zatca_desc: 'Phase 2 configuration & certificates',
    set_integrations: 'Integrations', set_integrations_desc: 'WhatsApp, Banks, Payment gateways',
    set_backup: 'Backup & Security', set_backup_desc: 'Auto backup, 2FA, audit logs',
    pur_title: 'Purchase Management', pur_sub: 'Purchase orders, vendor bills & GRN',
    btn_new_po: 'New Purchase Order',
    mtd_purchase: 'MTD Purchases', pending_po: 'Pending POs',
    ap_outstanding: 'AP Outstanding', awaiting_grn: 'Awaiting GRN', due_soon: 'Due soon',
    po_list: 'Purchase Orders', th_po_num: 'PO #', th_vendor: 'Vendor',
    new_invoice_title: 'New Sales Invoice',
    lbl_customer: 'Customer *', lbl_invoice_date: 'Invoice Date *',
    lbl_due_date: 'Due Date *', lbl_currency: 'Currency',
    lbl_items: 'Line Items', btn_add_line: '+ Add Line',
    th_item: 'Item', th_price: 'Price', th_vat: 'VAT 15%', th_total: 'Total',
    subtotal: 'Subtotal', vat_15: 'VAT (15%)', grand_total: 'Grand Total',
    lbl_notes: 'Notes', invoice_notes_ph: 'Payment terms, special instructions...',
    btn_cancel: 'Cancel', btn_save_draft: 'Save Draft', btn_submit_invoice: 'Submit Invoice',
    je_title: 'Journal Entry', lbl_je_date: 'Date *', lbl_je_ref: 'Reference',
    th_account: 'Account', th_debit: 'Debit (SAR)', th_credit: 'Credit (SAR)', th_remarks: 'Remarks',
    je_balance_check: 'Balance Check:', balanced: '✓ Balanced — SAR 10,000',
    btn_post: 'Post Entry',
    add_cust_title: 'Add Customer',
    lbl_cust_name: 'Customer Name *', lbl_cust_type: 'Customer Type',
    individual: 'Individual', company: 'Company',
    lbl_cust_phone: 'Phone', lbl_cust_email: 'Email',
    lbl_vat_number: 'VAT Number', lbl_cr_number: 'CR Number',
    lbl_city: 'City', lbl_credit_limit: 'Credit Limit (SAR)',
    btn_save_customer: 'Save Customer',
    pl_modal_title: 'Profit & Loss Statement',
    period: 'Period:', company_label: 'Company:', currency_label: 'Currency:',
    account_name_h: 'Account', fy2025_h: 'FY 2025', fy2024_h: 'FY 2024', variance_h: 'Variance',
    income_section: 'INCOME', pl_sales_rev: 'Sales Revenue', pl_service_rev: 'Service Revenue',
    total_income: 'Total Income', cogs_section: 'COST OF GOODS SOLD', pl_cogs: 'Cost of Goods',
    gross_profit: 'Gross Profit', opex_section: 'OPERATING EXPENSES',
    pl_salaries: 'Salaries & Benefits', pl_rent: 'Rent', pl_utilities: 'Utilities',
    pl_marketing: 'Marketing', total_opex: 'Total OpEx', net_profit_row: 'NET PROFIT',
    btn_close: 'Close',
    se_title: 'Stock Entry', lbl_entry_type: 'Entry Type *', lbl_se_date: 'Date *',
    lbl_warehouse: 'Warehouse *', lbl_ref_doc: 'Reference',
    se_receipt: 'Material Receipt', se_issue: 'Material Issue', se_transfer: 'Stock Transfer',
    btn_add_item_line: '+ Add Item', btn_submit_se: 'Submit Entry',
    th_unit: 'Unit', th_rate: 'Rate (SAR)',
    notifications: 'Notifications',
    notif1: 'Invoice INV-2025-342 is overdue by 5 days',
    notif2: 'Low stock alert: Office Chair (3 remaining)',
    notif3: 'ZATCA e-invoice sync completed (28 invoices)',
    notif4: 'Monthly payroll processed — SAR 284,000',
    search_tip1: 'Navigate with ↑↓', search_tip2: 'Open with Enter', search_tip3: 'Close with Esc',
    cta_portfolio: 'View Developer Portfolio →',
    live_badge: '● LIVE'
  },
  ar: {
    search_placeholder: 'ابحث في الفواتير، العملاء، التقارير... (Ctrl+K)',
    user_name: 'محمد صالح', user_role: 'مدير النظام',
    nav_main: 'الرئيسية', nav_people: 'الأشخاص', nav_analytics: 'التحليلات',
    nav_dashboard: 'لوحة التحكم', nav_sales: 'المبيعات', nav_purchase: 'المشتريات',
    nav_accounting: 'المحاسبة', nav_inventory: 'المخزون',
    nav_customers: 'العملاء', nav_hr: 'الموارد البشرية',
    nav_reports: 'التقارير', nav_settings: 'الإعدادات',
    company_name: 'مجموعة الرشيدي', fiscal_year: 'السنة المالية 2025 · ريال',
    dash_title: 'لوحة التحكم', dash_sub: 'مرحباً محمد — إليك نظرة عامة على أعمالك',
    btn_quick_add: '+ إضافة سريعة', btn_new_invoice: 'فاتورة جديدة',
    kpi_revenue: 'إجمالي الإيرادات', kpi_invoices: 'إجمالي الفواتير',
    kpi_receivable: 'الذمم المدينة', kpi_stock: 'أصناف المخزون',
    vs_last: 'مقارنة بالشهر الماضي', overdue: 'متأخرة', low_stock: 'مخزون منخفض',
    ch_revenue: 'الإيرادات والمصروفات', ch_revenue_sub: 'آخر 12 شهراً',
    tab_monthly: 'شهري', tab_quarterly: 'ربعي',
    ch_breakdown: 'توزيع الإيرادات', ch_breakdown_sub: 'حسب الفئة',
    recent_tx: 'آخر المعاملات', view_all: 'عرض الكل',
    quick_actions: 'الإجراءات السريعة',
    qa_invoice: 'فاتورة جديدة', qa_payment: 'دفعة', qa_customer: 'عميل',
    qa_stock: 'قيد مخزون', qa_journal: 'قيد يومية', qa_reports: 'التقارير',
    ar_aging: 'تحليل الذمم المدينة', aging_current: 'جارية',
    aging_30: '1-30 يوم', aging_60: '31-60 يوم', aging_over: '+60 يوم',
    th_ref: 'المرجع', th_party: 'الطرف', th_date: 'التاريخ',
    th_amount: 'المبلغ', th_status: 'الحالة', th_actions: 'الإجراءات',
    th_invoice: 'رقم الفاتورة', th_customer: 'العميل', th_due: 'تاريخ الاستحقاق',
    sales_title: 'إدارة المبيعات', sales_sub: 'إدارة الفواتير وعروض الأسعار والطلبات',
    btn_quotation: 'عرض سعر جديد',
    mtd_sales: 'مبيعات الشهر', pending_inv: 'معلقة', avg_invoice: 'متوسط الفاتورة',
    needs_action: 'تحتاج إجراء', sales_list: 'فواتير المبيعات',
    all_status: 'كل الحالات', paid: 'مدفوعة', unpaid: 'غير مدفوعة',
    search_invoices: 'بحث في الفواتير...',
    showing_records: 'عرض 1-10 من 342 سجل',
    acc_title: 'المحاسبة', acc_sub: 'دليل الحسابات وقيود اليومية والملخص المالي',
    btn_journal: 'قيد يومية', btn_fin_reports: 'التقارير المالية',
    kpi_assets: 'إجمالي الأصول', kpi_liabilities: 'الالتزامات',
    kpi_equity: 'حقوق الملكية', kpi_net_profit: 'صافي الربح',
    coa_title: 'دليل الحسابات', btn_add_account: '+ إضافة حساب',
    th_acc_code: 'الرمز', th_acc_name: 'اسم الحساب', th_acc_type: 'النوع',
    th_acc_balance: 'الرصيد', th_acc_group: 'المجموعة',
    inv_title: 'إدارة المخزون', inv_sub: 'تتبع المخزون الفوري عبر جميع المستودعات',
    btn_stock_entry: 'قيد مخزون', btn_add_item: 'إضافة صنف',
    total_items: 'إجمالي الأصناف', low_stock_items: 'مخزون منخفض', stock_value: 'قيمة المخزون',
    reorder_needed: 'يحتاج إعادة طلب', item_list: 'قائمة الأصناف',
    all_warehouses: 'جميع المستودعات',
    th_item_code: 'الكود', th_item_name: 'اسم الصنف', th_warehouse: 'المستودع',
    th_qty: 'الكمية', th_unit_price: 'سعر الوحدة', th_total_val: 'إجمالي القيمة',
    cust_title: 'العملاء وإدارة العلاقات', cust_sub: 'إدارة علاقاتك مع العملاء',
    btn_add_customer: 'إضافة عميل',
    hr_title: 'الموارد البشرية والرواتب', hr_sub: 'متوافق مع نظام العمل السعودي — تكامل GOSI',
    btn_run_payroll: 'تشغيل الرواتب', btn_add_employee: 'إضافة موظف',
    total_employees: 'الموظفون', payroll_cost: 'الرواتب / الشهر',
    pending_leaves: 'إجازات معلقة', for_approval: 'للموافقة', gosi_contrib: 'GOSI',
    employee_list: 'قائمة الموظفين',
    th_emp_id: 'الرقم', th_emp_name: 'الاسم', th_department: 'القسم',
    th_position: 'المنصب', th_salary: 'الراتب', th_gosi: 'GOSI',
    rep_title: 'التقارير المالية', rep_sub: 'تقارير متوافقة مع IFRS — تصدير PDF و Excel',
    btn_export_pdf: 'تصدير PDF', btn_export_excel: 'تصدير Excel',
    rep_pl: 'قائمة الدخل', rep_pl_desc: 'بيان الدخل مع مقارنة سنوية',
    rep_bs: 'الميزانية العمومية', rep_bs_desc: 'الأصول والالتزامات وحقوق الملكية',
    rep_cf: 'التدفق النقدي', rep_cf_desc: 'الأنشطة التشغيلية والاستثمارية والتمويلية',
    rep_tb: 'ميزان المراجعة', rep_tb_desc: 'التحقق من أرصدة الدائن والمدين',
    rep_vat: 'إقرار ضريبة القيمة المضافة', rep_vat_desc: 'تقرير ضريبي متوافق مع هيئة الزكاة',
    rep_ar: 'تحليل الذمم', rep_ar_desc: 'الذمم المدينة مصنفة 30/60/90 يوم',
    pl_preview: 'معاينة قائمة الدخل — السنة المالية 2025',
    set_title: 'إعدادات النظام', set_sub: 'تكوين بيئة ERP الخاصة بك',
    set_company: 'ملف الشركة', set_company_desc: 'الاسم، الشعار، السجل التجاري، السنة المالية',
    set_currency: 'العملات', set_currency_desc: 'متعدد العملات وأسعار الصرف',
    set_users: 'المستخدمون والأدوار', set_users_desc: 'الصلاحيات والتحكم في الوصول',
    set_zatca: 'الفاتورة الإلكترونية ZATCA', set_zatca_desc: 'تكوين المرحلة الثانية والشهادات',
    set_integrations: 'التكاملات', set_integrations_desc: 'واتساب والبنوك وبوابات الدفع',
    set_backup: 'النسخ الاحتياطي والأمان', set_backup_desc: 'نسخ احتياطي تلقائي وتحقق ثنائي',
    pur_title: 'إدارة المشتريات', pur_sub: 'أوامر الشراء وفواتير الموردين والاستلام',
    btn_new_po: 'أمر شراء جديد',
    mtd_purchase: 'مشتريات الشهر', pending_po: 'أوامر معلقة',
    ap_outstanding: 'الذمم الدائنة', awaiting_grn: 'في انتظار الاستلام', due_soon: 'مستحقة قريباً',
    po_list: 'أوامر الشراء', th_po_num: 'رقم الأمر', th_vendor: 'المورد',
    new_invoice_title: 'فاتورة مبيعات جديدة',
    lbl_customer: 'العميل *', lbl_invoice_date: 'تاريخ الفاتورة *',
    lbl_due_date: 'تاريخ الاستحقاق *', lbl_currency: 'العملة',
    lbl_items: 'بنود الفاتورة', btn_add_line: '+ إضافة بند',
    th_item: 'الصنف', th_price: 'السعر', th_vat: 'ضريبة 15%', th_total: 'الإجمالي',
    subtotal: 'المجموع الفرعي', vat_15: 'ضريبة القيمة المضافة (15%)', grand_total: 'الإجمالي الكلي',
    lbl_notes: 'ملاحظات', invoice_notes_ph: 'شروط الدفع، تعليمات خاصة...',
    btn_cancel: 'إلغاء', btn_save_draft: 'حفظ كمسودة', btn_submit_invoice: 'إرسال الفاتورة',
    je_title: 'قيد يومية', lbl_je_date: 'التاريخ *', lbl_je_ref: 'المرجع',
    th_account: 'الحساب', th_debit: 'مدين (ريال)', th_credit: 'دائن (ريال)', th_remarks: 'ملاحظات',
    je_balance_check: 'فحص التوازن:', balanced: '✓ متوازن — 10,000 ريال',
    btn_post: 'ترحيل القيد',
    add_cust_title: 'إضافة عميل',
    lbl_cust_name: 'اسم العميل *', lbl_cust_type: 'نوع العميل',
    individual: 'فرد', company: 'شركة',
    lbl_cust_phone: 'الهاتف', lbl_cust_email: 'البريد الإلكتروني',
    lbl_vat_number: 'الرقم الضريبي', lbl_cr_number: 'رقم السجل التجاري',
    lbl_city: 'المدينة', lbl_credit_limit: 'حد الائتمان (ريال)',
    btn_save_customer: 'حفظ العميل',
    pl_modal_title: 'قائمة الدخل',
    period: 'الفترة:', company_label: 'الشركة:', currency_label: 'العملة:',
    account_name_h: 'الحساب', fy2025_h: 'السنة المالية 2025', fy2024_h: 'السنة المالية 2024', variance_h: 'التغيير',
    income_section: 'الإيرادات', pl_sales_rev: 'إيرادات المبيعات', pl_service_rev: 'إيرادات الخدمات',
    total_income: 'إجمالي الإيرادات', cogs_section: 'تكلفة البضاعة المباعة', pl_cogs: 'تكلفة البضاعة',
    gross_profit: 'مجمل الربح', opex_section: 'المصروفات التشغيلية',
    pl_salaries: 'الرواتب والمزايا', pl_rent: 'الإيجار', pl_utilities: 'المرافق',
    pl_marketing: 'التسويق', total_opex: 'إجمالي المصروفات', net_profit_row: 'صافي الربح',
    btn_close: 'إغلاق',
    se_title: 'قيد مخزون', lbl_entry_type: 'نوع القيد *', lbl_se_date: 'التاريخ *',
    lbl_warehouse: 'المستودع *', lbl_ref_doc: 'المستند المرجعي',
    se_receipt: 'استلام بضاعة', se_issue: 'إصدار بضاعة', se_transfer: 'تحويل مخزون',
    btn_add_item_line: '+ إضافة صنف', btn_submit_se: 'إرسال القيد',
    th_unit: 'الوحدة', th_rate: 'السعر (ريال)',
    notifications: 'الإشعارات',
    notif1: 'الفاتورة INV-2025-342 متأخرة بـ 5 أيام',
    notif2: 'تنبيه مخزون منخفض: كرسي مكتب (3 متبقية)',
    notif3: 'اكتمل مزامنة الفواتير الإلكترونية ZATCA (28 فاتورة)',
    notif4: 'تمت معالجة رواتب الشهر — 284,000 ريال',
    search_tip1: 'التنقل بـ ↑↓', search_tip2: 'فتح بـ Enter', search_tip3: 'إغلاق بـ Esc',
    cta_portfolio: 'عرض أعمال المطور ←',
    live_badge: '● مباشر'
  }
};

// ═══════════════════════════════════════
// 3. SAMPLE DATA
// ═══════════════════════════════════════
const DATA = {
  transactions: [
    { ref: 'INV-2025-342', party: 'Ahmed Al-Rashidi', date: '18/02/2025', amount: 'SAR 12,450', status: 'paid' },
    { ref: 'INV-2025-341', party: 'Gulf Trading Co.', date: '17/02/2025', amount: 'SAR 8,200', status: 'unpaid' },
    { ref: 'PO-2025-089', party: 'Office Supplies Ltd.', date: '16/02/2025', amount: 'SAR 3,800', status: 'paid' },
    { ref: 'INV-2025-340', party: 'Sarah Al-Otaibi', date: '15/02/2025', amount: 'SAR 5,600', status: 'overdue' },
    { ref: 'JE-2025-088', party: 'Bank Reconciliation', date: '15/02/2025', amount: 'SAR 45,000', status: 'paid' },
    { ref: 'INV-2025-339', party: 'Riyadh Clinic', date: '14/02/2025', amount: 'SAR 2,100', status: 'paid' },
    { ref: 'PO-2025-088', party: 'Tech Solutions KSA', date: '13/02/2025', amount: 'SAR 18,900', status: 'unpaid' },
    { ref: 'INV-2025-338', party: 'Desert Ventures', date: '12/02/2025', amount: 'SAR 7,350', status: 'overdue' },
  ],
  invoices: [
    { num: 'INV-2025-342', customer: 'Ahmed Al-Rashidi', date: '18/02/2025', due: '20/03/2025', amount: 'SAR 12,450', status: 'paid' },
    { num: 'INV-2025-341', customer: 'Gulf Trading Co.', date: '17/02/2025', due: '17/03/2025', amount: 'SAR 8,200', status: 'unpaid' },
    { num: 'INV-2025-340', customer: 'Sarah Al-Otaibi', date: '15/02/2025', due: '15/01/2025', amount: 'SAR 5,600', status: 'overdue' },
    { num: 'INV-2025-339', customer: 'Riyadh Clinic', date: '14/02/2025', due: '14/03/2025', amount: 'SAR 2,100', status: 'paid' },
    { num: 'INV-2025-338', customer: 'Desert Ventures', date: '12/02/2025', due: '10/01/2025', amount: 'SAR 7,350', status: 'overdue' },
    { num: 'INV-2025-337', customer: 'Falcon Industries', date: '10/02/2025', due: '10/03/2025', amount: 'SAR 24,000', status: 'unpaid' },
    { num: 'INV-2025-336', customer: 'Al-Noor Group', date: '08/02/2025', due: '08/03/2025', amount: 'SAR 11,800', status: 'paid' },
    { num: 'INV-2025-335', customer: 'Saudi Metals Co.', date: '06/02/2025', due: '06/03/2025', amount: 'SAR 33,600', status: 'draft' },
  ],
  coa: [
    { code: '1001', name: 'Cash & Bank', type: 'Asset', balance: 'SAR 842,400', group: 'Current Assets' },
    { code: '1100', name: 'Accounts Receivable', type: 'Asset', balance: 'SAR 89,200', group: 'Current Assets' },
    { code: '1200', name: 'Inventory', type: 'Asset', balance: 'SAR 2,840,200', group: 'Current Assets' },
    { code: '1500', name: 'Fixed Assets', type: 'Asset', balance: 'SAR 1,048,200', group: 'Non-Current Assets' },
    { code: '2001', name: 'Accounts Payable', type: 'Liability', balance: 'SAR 124,800', group: 'Current Liabilities' },
    { code: '2100', name: 'VAT Payable', type: 'Liability', balance: 'SAR 186,000', group: 'Current Liabilities' },
    { code: '3001', name: 'Share Capital', type: 'Equity', balance: 'SAR 2,000,000', group: 'Equity' },
    { code: '3100', name: 'Retained Earnings', type: 'Equity', balance: 'SAR 1,580,000', group: 'Equity' },
    { code: '4001', name: 'Sales Revenue', type: 'Income', balance: 'SAR 1,240,500', group: 'Revenue' },
    { code: '5001', name: 'Cost of Goods Sold', type: 'Expense', balance: 'SAR 742,000', group: 'COGS' },
    { code: '6001', name: 'Salaries Expense', type: 'Expense', balance: 'SAR 284,000', group: 'OpEx' },
    { code: '6002', name: 'Rent Expense', type: 'Expense', balance: 'SAR 120,000', group: 'OpEx' },
  ],
  inventory: [
    { code: 'ITM-001', name: 'Office Chair Premium', warehouse: 'Main Warehouse', qty: 3, price: 'SAR 850', total: 'SAR 2,550', status: 'low' },
    { code: 'ITM-002', name: 'Standing Desk', warehouse: 'Main Warehouse', qty: 12, price: 'SAR 2,400', total: 'SAR 28,800', status: 'in-stock' },
    { code: 'ITM-003', name: 'Laptop Dell XPS', warehouse: 'Riyadh Branch', qty: 8, price: 'SAR 6,500', total: 'SAR 52,000', status: 'in-stock' },
    { code: 'ITM-004', name: 'Monitor 27"', warehouse: 'Main Warehouse', qty: 0, price: 'SAR 1,800', total: 'SAR 0', status: 'out' },
    { code: 'ITM-005', name: 'Keyboard Wireless', warehouse: 'Main Warehouse', qty: 25, price: 'SAR 240', total: 'SAR 6,000', status: 'in-stock' },
    { code: 'ITM-006', name: 'Printer Laser HP', warehouse: 'Riyadh Branch', qty: 4, price: 'SAR 1,200', total: 'SAR 4,800', status: 'low' },
    { code: 'ITM-007', name: 'Server Rack 42U', warehouse: 'Main Warehouse', qty: 2, price: 'SAR 8,900', total: 'SAR 17,800', status: 'in-stock' },
  ],
  customers: [
    { initials: 'AH', name: 'Ahmed Al-Rashidi', meta: 'Al-Rashidi Trading • Riyadh', invoices: 48, balance: 'SAR 12,450' },
    { initials: 'SA', name: 'Sarah Al-Otaibi', meta: 'Serenity Clinic • Jeddah', invoices: 24, balance: 'SAR 5,600' },
    { initials: 'MG', name: 'Mohammed Al-Ghamdi', meta: 'Gulf Retail • Dammam', invoices: 67, balance: 'SAR 0' },
    { initials: 'GT', name: 'Gulf Trading Co.', meta: 'B2B Wholesale • Riyadh', invoices: 112, balance: 'SAR 8,200' },
    { initials: 'FA', name: 'Falcon Industries', meta: 'Manufacturing • Jubail', invoices: 33, balance: 'SAR 24,000' },
    { initials: 'NN', name: 'Al-Noor Group', meta: 'Conglomerate • Riyadh', invoices: 89, balance: 'SAR 0' },
  ],
  employees: [
    { id: 'EMP-001', name: 'Ali Al-Zahrani', dept: 'Finance', position: 'CFO', salary: 'SAR 28,000', gosi: 'SAR 2,800', status: 'active' },
    { id: 'EMP-002', name: 'Fatima Al-Dosari', dept: 'Accounting', position: 'Senior Accountant', salary: 'SAR 14,000', gosi: 'SAR 1,400', status: 'active' },
    { id: 'EMP-003', name: 'Khalid Al-Mutairi', dept: 'Sales', position: 'Sales Manager', salary: 'SAR 18,000', gosi: 'SAR 1,800', status: 'active' },
    { id: 'EMP-004', name: 'Nour Al-Rashidi', dept: 'HR', position: 'HR Manager', salary: 'SAR 15,000', gosi: 'SAR 1,500', status: 'active' },
    { id: 'EMP-005', name: 'Omar Al-Shehri', dept: 'IT', position: 'System Admin', salary: 'SAR 12,000', gosi: 'SAR 1,200', status: 'active' },
    { id: 'EMP-006', name: 'Reem Al-Qahtani', dept: 'Marketing', position: 'Marketing Lead', salary: 'SAR 13,500', gosi: 'SAR 1,350', status: 'active' },
  ],
  purchaseOrders: [
    { num: 'PO-2025-012', vendor: 'Office Supplies Ltd.', date: '15/02/2025', amount: 'SAR 18,400', status: 'received' },
    { num: 'PO-2025-011', vendor: 'Tech Solutions KSA', date: '12/02/2025', amount: 'SAR 48,200', status: 'ordered' },
    { num: 'PO-2025-010', vendor: 'Furniture World', date: '08/02/2025', amount: 'SAR 24,600', status: 'received' },
    { num: 'PO-2025-009', vendor: 'IT Equipment Co.', date: '05/02/2025', amount: 'SAR 72,000', status: 'ordered' },
    { num: 'PO-2025-008', vendor: 'Cleaning Supplies', date: '01/02/2025', amount: 'SAR 4,200', status: 'received' },
  ]
};

const SEARCH_INDEX = [
  { name:'Dashboard', type:'module', icon:'📊', module:'dashboard'},
  { name:'Sales', type:'module', icon:'🛒', module:'sales'},
  { name:'Accounting', type:'module', icon:'💰', module:'accounting'},
  { name:'Inventory', type:'module', icon:'📦', module:'inventory'},
  { name:'Customers', type:'module', icon:'👥', module:'customers'},
  { name:'HR & Payroll', type:'module', icon:'👤', module:'hr'},
  { name:'Reports', type:'module', icon:'📈', module:'reports'},
  { name:'Settings', type:'module', icon:'⚙️', module:'settings'},
  { name:'Purchase', type:'module', icon:'🏪', module:'purchase'},
  { name:'New Invoice', type:'action', icon:'📄', action:()=>openModal('new-invoice')},
  { name:'Journal Entry', type:'action', icon:'📒', action:()=>openModal('journal-entry')},
  { name:'Add Customer', type:'action', icon:'👤', action:()=>openModal('add-customer')},
  { name:'Stock Entry', type:'action', icon:'📦', action:()=>openModal('stock-entry')},
  { name:'P&L Report', type:'report', icon:'📊', action:()=>openModal('report-pl')},
];

// ═══════════════════════════════════════
// 4. THEME SYSTEM
// ═══════════════════════════════════════
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const moon = document.getElementById('ic-moon');
  const sun = document.getElementById('ic-sun');
  if(theme === 'dark') { moon.style.display='block'; sun.style.display='none'; }
  else { moon.style.display='none'; sun.style.display='block'; }
  localStorage.setItem('erp_theme', theme);
  state.theme = theme;
}
document.getElementById('theme-btn').addEventListener('click', () => {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
});

// ═══════════════════════════════════════
// 5. LANGUAGE SYSTEM
// ═══════════════════════════════════════
function applyLang(lang) {
  state.lang = lang;
  localStorage.setItem('erp_lang', lang);
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('lang-label').textContent = lang === 'ar' ? 'EN' : 'ع';
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const val = T[lang][key];
    if(val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-key-ph]').forEach(el => {
    const key = el.getAttribute('data-key-ph');
    const val = T[lang][key];
    if(val !== undefined) el.placeholder = val;
  });
}
document.getElementById('lang-btn').addEventListener('click', () => {
  applyLang(state.lang === 'ar' ? 'en' : 'ar');
});

// ═══════════════════════════════════════
// 6. MODULE NAVIGATION
// ═══════════════════════════════════════
function openModule(mod) {
  document.querySelectorAll('.module-view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const view = document.getElementById('mod-'+mod);
  if(view) view.classList.add('active');
  const navItem = document.querySelector(`.nav-item[data-module="${mod}"]`);
  if(navItem) navItem.classList.add('active');
  state.currentModule = mod;
  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('mobile-open');
  // Scroll to top
  document.getElementById('main-content').scrollTop = 0;
}

document.querySelectorAll('.nav-item[data-module]').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    openModule(item.dataset.module);
  });
});

// ═══════════════════════════════════════
// 7. SIDEBAR TOGGLE
// ═══════════════════════════════════════
document.getElementById('sidebar-toggle').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  const isMobile = window.innerWidth < 900;
  if(isMobile) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebar.classList.toggle('collapsed');
    state.sidebarCollapsed = !state.sidebarCollapsed;
  }
});

// ═══════════════════════════════════════
// 8. MODALS
// ═══════════════════════════════════════
function openModal(id) {
  const overlay = document.getElementById('modal-'+id);
  if(!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  const overlay = document.getElementById('modal-'+id);
  if(!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    document.body.style.overflow = '';
    closeSearch();
  }
});

// ═══════════════════════════════════════
// 9. NOTIFICATIONS
// ═══════════════════════════════════════
document.getElementById('notif-btn').addEventListener('click', () => {
  document.getElementById('notif-panel').classList.toggle('open');
});

// ═══════════════════════════════════════
// 10. TOAST NOTIFICATIONS
// ═══════════════════════════════════════
function showToast(type, message) {
  const icons = { success:'✅', error:'❌', warning:'⚠️', info:'ℹ️' };
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]||'ℹ️'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3500);
}

// ═══════════════════════════════════════
// 11. GLOBAL SEARCH
// ═══════════════════════════════════════
function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  setTimeout(() => document.getElementById('search-input-main').focus(), 50);
}
function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
  document.getElementById('search-input-main').value = '';
  document.getElementById('search-results').innerHTML = '';
}
function handleSearch(query) {
  const results = document.getElementById('search-results');
  if(!query.trim()) { results.innerHTML = ''; return; }
  const q = query.toLowerCase();
  const filtered = SEARCH_INDEX.filter(item =>
    item.name.toLowerCase().includes(q) ||
    (item.type && item.type.toLowerCase().includes(q))
  );
  if(!filtered.length) {
    results.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:0.8rem">No results found</div>`;
    return;
  }
  results.innerHTML = filtered.map((item, i) => `
    <div class="search-result-item" onclick="handleSearchSelect(${i})" data-index="${i}">
      <div class="search-result-icon">${item.icon}</div>
      <div><div class="search-result-name">${item.name}</div><div class="search-result-type">${item.type}</div></div>
    </div>
  `).join('');
  results._filtered = filtered;
}
function handleSearchSelect(i) {
  const results = document.getElementById('search-results');
  const item = results._filtered[i];
  if(!item) return;
  closeSearch();
  if(item.module) openModule(item.module);
  else if(item.action) item.action();
}

document.getElementById('global-search').addEventListener('click', openSearch);
document.getElementById('global-search').addEventListener('keydown', e => { if(e.key==='k'&&(e.ctrlKey||e.metaKey)){e.preventDefault();openSearch();} });
document.addEventListener('keydown', e => { if(e.key==='k'&&(e.ctrlKey||e.metaKey)){e.preventDefault();openSearch();} });
document.getElementById('search-overlay').addEventListener('click', e => { if(e.target===e.currentTarget) closeSearch(); });

// ═══════════════════════════════════════
// 12. RENDER TABLES
// ═══════════════════════════════════════
function statusBadge(status) {
  const map = {
    paid: 'badge-paid', unpaid: 'badge-unpaid', overdue: 'badge-overdue',
    draft: 'badge-draft', ordered: 'badge-ordered', received: 'badge-received',
    active: 'badge-active', inactive: 'badge-inactive',
    'in-stock': 'badge-in-stock', low: 'badge-low', out: 'badge-out'
  };
  const labels = {
    paid: {en:'Paid',ar:'مدفوعة'}, unpaid: {en:'Unpaid',ar:'غير مدفوعة'},
    overdue: {en:'Overdue',ar:'متأخرة'}, draft: {en:'Draft',ar:'مسودة'},
    ordered: {en:'Ordered',ar:'مطلوب'}, received: {en:'Received',ar:'مستلم'},
    active: {en:'Active',ar:'نشط'}, inactive: {en:'Inactive',ar:'غير نشط'},
    'in-stock': {en:'In Stock',ar:'متوفر'}, low: {en:'Low Stock',ar:'منخفض'}, out: {en:'Out of Stock',ar:'نفد'}
  };
  const cls = map[status] || 'badge-draft';
  const label = (labels[status]||{})[state.lang] || status;
  return `<span class="badge ${cls}"><span class="badge-dot"></span>${label}</span>`;
}

function renderRecentTransactions() {
  const tbody = document.getElementById('recent-tx-body');
  if(!tbody) return;
  tbody.innerHTML = DATA.transactions.map(t => `
    <tr>
      <td><span style="font-weight:600;font-family:monospace;font-size:0.75rem">${t.ref}</span></td>
      <td>${t.party}</td>
      <td style="color:var(--text-muted)">${t.date}</td>
      <td style="font-weight:700">${t.amount}</td>
      <td>${statusBadge(t.status)}</td>
    </tr>
  `).join('');
}

function renderSalesTable() {
  const tbody = document.getElementById('sales-table-body');
  if(!tbody) return;
  tbody.innerHTML = DATA.invoices.map(inv => `
    <tr>
      <td><span style="font-weight:600;font-family:monospace;font-size:0.75rem">${inv.num}</span></td>
      <td>${inv.customer}</td>
      <td style="color:var(--text-muted)">${inv.date}</td>
      <td style="color:var(--text-muted)">${inv.due}</td>
      <td style="font-weight:700">${inv.amount}</td>
      <td>${statusBadge(inv.status)}</td>
      <td>
        <button class="tbl-action">View</button>
        <button class="tbl-action" onclick="showToast('info','Invoice sent via WhatsApp')">Send</button>
      </td>
    </tr>
  `).join('');
}

function renderCOA() {
  const tbody = document.getElementById('coa-body');
  if(!tbody) return;
  tbody.innerHTML = DATA.coa.map(acc => `
    <tr>
      <td><code style="font-size:0.72rem;background:var(--bg-card2);padding:2px 6px;border-radius:4px">${acc.code}</code></td>
      <td style="font-weight:600">${acc.name}</td>
      <td><span class="badge badge-draft" style="font-size:0.6rem">${acc.type}</span></td>
      <td style="font-weight:700">${acc.balance}</td>
      <td style="color:var(--text-muted);font-size:0.72rem">${acc.group}</td>
    </tr>
  `).join('');
}

function renderInventory() {
  const tbody = document.getElementById('inventory-body');
  if(!tbody) return;
  tbody.innerHTML = DATA.inventory.map(item => `
    <tr>
      <td><code style="font-size:0.72rem;background:var(--bg-card2);padding:2px 6px;border-radius:4px">${item.code}</code></td>
      <td style="font-weight:600">${item.name}</td>
      <td style="color:var(--text-muted)">${item.warehouse}</td>
      <td style="font-weight:700;${item.qty===0?'color:var(--danger)':item.qty<5?'color:var(--warning)':''}">${item.qty}</td>
      <td>${item.price}</td>
      <td style="font-weight:700">${item.total}</td>
      <td>${statusBadge(item.status)}</td>
    </tr>
  `).join('');
}

function renderCustomers() {
  const grid = document.getElementById('customers-grid');
  if(!grid) return;
  grid.innerHTML = DATA.customers.map(c => `
    <div class="customer-card" onclick="showToast('info','Opening ${c.name} profile...')">
      <div class="cust-avatar">${c.initials}</div>
      <div class="cust-name">${c.name}</div>
      <div class="cust-meta">${c.meta}</div>
      <div class="cust-stats">
        <div><div class="cust-stat-val">${c.invoices}</div><div class="cust-stat-lbl">Invoices</div></div>
        <div><div class="cust-stat-val" style="${c.balance!='SAR 0'?'color:var(--warning)':''}">${c.balance}</div><div class="cust-stat-lbl">Balance</div></div>
      </div>
    </div>
  `).join('');
}

function renderHR() {
  const tbody = document.getElementById('hr-body');
  if(!tbody) return;
  tbody.innerHTML = DATA.employees.map(emp => `
    <tr>
      <td><code style="font-size:0.72rem;background:var(--bg-card2);padding:2px 6px;border-radius:4px">${emp.id}</code></td>
      <td style="font-weight:600">${emp.name}</td>
      <td style="color:var(--text-muted)">${emp.dept}</td>
      <td>${emp.position}</td>
      <td style="font-weight:700">${emp.salary}</td>
      <td style="color:var(--text-muted)">${emp.gosi}</td>
      <td>${statusBadge(emp.status)}</td>
    </tr>
  `).join('');
}

function renderPurchase() {
  const tbody = document.getElementById('purchase-body');
  if(!tbody) return;
  tbody.innerHTML = DATA.purchaseOrders.map(po => `
    <tr>
      <td><span style="font-weight:600;font-family:monospace;font-size:0.75rem">${po.num}</span></td>
      <td style="font-weight:600">${po.vendor}</td>
      <td style="color:var(--text-muted)">${po.date}</td>
      <td style="font-weight:700">${po.amount}</td>
      <td>${statusBadge(po.status)}</td>
      <td><button class="tbl-action">View PO</button></td>
    </tr>
  `).join('');
}

// ═══════════════════════════════════════
// 13. CHARTS (Canvas-based, no library)
// ═══════════════════════════════════════
function drawRevenueChart() {
  const canvas = document.getElementById('revenueChart');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth; const H = 220;
  canvas.width = W * devicePixelRatio; canvas.height = H * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  canvas.style.width = W+'px'; canvas.style.height = H+'px';

  const rev = [82,96,88,110,102,124,108,132,118,142,128,145];
  const exp = [60,72,65,80,78,85,82,94,88,102,94,105];
  const months = ['Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb'];
  const isDark = state.theme === 'dark';
  const textColor = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)';
  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
  const pad = { t:10, r:10, b:28, l:10 };
  const cW = W - pad.l - pad.r; const cH = H - pad.t - pad.b;
  const maxVal = 160;
  const toX = (i) => pad.l + (i / (rev.length-1)) * cW;
  const toY = (v) => pad.t + cH - (v / maxVal) * cH;

  ctx.clearRect(0,0,W,H);
  // Grid
  for(let g=0;g<=4;g++) {
    const y = pad.t + (g/4)*cH;
    ctx.strokeStyle = gridColor; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pad.l,y); ctx.lineTo(W-pad.r,y); ctx.stroke();
  }
  // Revenue fill
  const gradient = ctx.createLinearGradient(0, pad.t, 0, pad.t+cH);
  gradient.addColorStop(0, 'rgba(200,168,75,0.25)');
  gradient.addColorStop(1, 'rgba(200,168,75,0)');
  ctx.beginPath();
  rev.forEach((v,i) => i===0 ? ctx.moveTo(toX(i),toY(v)) : ctx.lineTo(toX(i),toY(v)));
  ctx.lineTo(toX(rev.length-1), pad.t+cH); ctx.lineTo(toX(0), pad.t+cH); ctx.closePath();
  ctx.fillStyle = gradient; ctx.fill();
  // Revenue line
  ctx.beginPath();
  rev.forEach((v,i) => i===0 ? ctx.moveTo(toX(i),toY(v)) : ctx.lineTo(toX(i),toY(v)));
  ctx.strokeStyle = '#C8A84B'; ctx.lineWidth = 2.5; ctx.lineJoin='round'; ctx.stroke();
  // Expense line
  ctx.beginPath();
  exp.forEach((v,i) => i===0 ? ctx.moveTo(toX(i),toY(v)) : ctx.lineTo(toX(i),toY(v)));
  ctx.strokeStyle = isDark ? 'rgba(239,68,68,0.6)' : 'rgba(239,68,68,0.5)';
  ctx.lineWidth = 1.5; ctx.setLineDash([5,4]); ctx.stroke(); ctx.setLineDash([]);
  // Month labels
  ctx.fillStyle = textColor; ctx.font = `${10*devicePixelRatio/devicePixelRatio}px Syne,Cairo,sans-serif`; ctx.textAlign='center';
  months.forEach((m,i) => ctx.fillText(m, toX(i), H-6));
  // Dots on revenue
  rev.forEach((v,i) => {
    ctx.beginPath();ctx.arc(toX(i),toY(v),3,0,Math.PI*2);
    ctx.fillStyle='#C8A84B';ctx.fill();
    ctx.strokeStyle=isDark?'#111827':'#fff';ctx.lineWidth=1.5;ctx.stroke();
  });
}

function drawBreakdownChart() {
  const canvas = document.getElementById('breakdownChart');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth; const H = 200;
  canvas.width = W * devicePixelRatio; canvas.height = H * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  canvas.style.width=W+'px'; canvas.style.height=H+'px';

  const data = [
    {label:'Sales',value:65,color:'#C8A84B'},
    {label:'Services',value:20,color:'#3B82F6'},
    {label:'Consulting',value:10,color:'#10B981'},
    {label:'Other',value:5,color:'#8B5CF6'},
  ];
  const cx=W/2, cy=H/2, r=Math.min(W,H)/2.2, inner=r*0.55;
  let angle=-Math.PI/2;
  const total=data.reduce((s,d)=>s+d.value,0);
  data.forEach(seg => {
    const slice=(seg.value/total)*Math.PI*2;
    ctx.beginPath();ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,r,angle,angle+slice);ctx.closePath();
    ctx.fillStyle=seg.color;ctx.fill();
    angle+=slice;
  });
  // Inner circle
  ctx.beginPath();ctx.arc(cx,cy,inner,0,Math.PI*2);
  ctx.fillStyle=state.theme==='dark'?'#111827':'#FFFFFF';ctx.fill();
  // Center text
  ctx.fillStyle=state.theme==='dark'?'rgba(255,255,255,0.85)':'rgba(0,0,0,0.85)';
  ctx.font=`bold ${14}px Syne,Cairo`;ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText('SAR 1.56M',cx,cy);

  // Legend
  const legend = document.getElementById('donut-legend');
  if(legend) {
    legend.innerHTML = data.map(d=>`
      <div class="legend-item">
        <div class="legend-dot" style="background:${d.color}"></div>
        <span class="legend-label">${d.label}</span>
        <span class="legend-val">${d.value}%</span>
      </div>
    `).join('');
  }
}

// ═══════════════════════════════════════
// 14. INVOICE LINE CALCULATIONS
// ═══════════════════════════════════════
function calcLine(input) { calcTotal(); }
function calcTotal() {
  let subtotal = 0;
  document.querySelectorAll('#invoice-lines .item-row').forEach(row => {
    const inputs = row.querySelectorAll('input[type=number]');
    const qty = parseFloat(inputs[0]?.value||0);
    const price = parseFloat(inputs[1]?.value||0);
    const line = qty * price;
    const vat = line * 0.15;
    const total = line + vat;
    const vatCell = row.querySelector('.vat-cell');
    const totalCell = row.querySelector('.total-cell');
    if(vatCell) vatCell.textContent = 'SAR '+vat.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,',');
    if(totalCell) totalCell.textContent = 'SAR '+total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,',');
    subtotal += line;
  });
  const vat = subtotal * 0.15;
  const grand = subtotal + vat;
  const fmt = n => 'SAR '+n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,',');
  const sub = document.getElementById('inv-subtotal');
  const vatEl = document.getElementById('inv-vat');
  const grandEl = document.getElementById('inv-grand');
  if(sub) sub.textContent = fmt(subtotal);
  if(vatEl) vatEl.textContent = fmt(vat);
  if(grandEl) grandEl.textContent = fmt(grand);
}

function addInvoiceLine() {
  const tbody = document.getElementById('invoice-lines');
  if(!tbody) return;
  const tr = document.createElement('tr');
  tr.className = 'item-row';
  tr.innerHTML = `
    <td><input class="form-input sm" type="text" placeholder="Item name..."/></td>
    <td><input class="form-input sm number" type="number" value="1" oninput="calcLine(this)"/></td>
    <td><input class="form-input sm number" type="number" value="0" oninput="calcLine(this)"/></td>
    <td class="vat-cell">SAR 0</td>
    <td class="total-cell">SAR 0</td>
    <td><button class="remove-line" onclick="this.closest('tr').remove();calcTotal()">✕</button></td>
  `;
  tbody.appendChild(tr);
}

// ═══════════════════════════════════════
// 15. RESIZE HANDLER
// ═══════════════════════════════════════
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    drawRevenueChart();
    drawBreakdownChart();
  }, 150);
});

// ═══════════════════════════════════════
// 16. INIT
// ═══════════════════════════════════════
function init() {
  applyTheme(state.theme);
  applyLang(state.lang);
  renderRecentTransactions();
  renderSalesTable();
  renderCOA();
  renderInventory();
  renderCustomers();
  renderHR();
  renderPurchase();
  setTimeout(() => {
    drawRevenueChart();
    drawBreakdownChart();
  }, 100);
}

document.addEventListener('DOMContentLoaded', init);
