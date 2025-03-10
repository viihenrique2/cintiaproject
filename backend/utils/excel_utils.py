import pandas as pd

def load_user_data(file_path):
    """Load user data from an Excel file."""
    try:
        data = pd.read_excel(file_path)
        return data
    except Exception as e:
        print(f"Error loading user data: {e}")
        return None

def save_payment_info(file_path, payment_data):
    """Save payment information to an Excel file."""
    try:
        df = pd.DataFrame(payment_data)
        df.to_excel(file_path, index=False, mode='a', header=False)
    except Exception as e:
        print(f"Error saving payment information: {e}")