from datetime import datetime
import pandas as pd

class PaymentService:
    def __init__(self, excel_file):
        self.excel_file = excel_file

    def calculate_outstanding_installments(self, user_id):
        payments = self.load_payments()
        user_payments = payments[payments['user_id'] == user_id]
        total_paid = user_payments['amount'].sum()
        total_due = self.get_total_due(user_id)
        outstanding = total_due - total_paid
        return outstanding if outstanding > 0 else 0

    def save_payment_record(self, user_id, amount, payment_date):
        payment_record = {
            'user_id': user_id,
            'amount': amount,
            'payment_date': payment_date
        }
        payments = self.load_payments()
        payments = payments.append(payment_record, ignore_index=True)
        self.save_payments(payments)

    def delete_payment_record(self, user_id, payment_date):
        payments = self.load_payments()
        payments = payments[~((payments['user_id'] == user_id) & (payments['payment_date'] == payment_date))]
        self.save_payments(payments)

    def load_payments(self):
        try:
            return pd.read_excel(self.excel_file)
        except FileNotFoundError:
            return pd.DataFrame(columns=['user_id', 'amount', 'payment_date'])

    def save_payments(self, payments):
        payments.to_excel(self.excel_file, index=False)

    def get_total_due(self, user_id):
        # Placeholder for total due calculation logic
        return 1000  # Example fixed amount for demonstration purposes