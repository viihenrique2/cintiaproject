class Usuario:
    def __init__(self, nome_usuario, senha, email):
        self.nome_usuario = nome_usuario
        self.senha = senha
        self.email = email

class Pagamento:
    def __init__(self, id_usuario, valor, plano_parcelamento, data_vencimento):
        self.id_usuario = id_usuario
        self.valor = valor
        self.plano_parcelamento = plano_parcelamento
        self.data_vencimento = data_vencimento