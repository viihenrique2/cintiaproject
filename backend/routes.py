from flask import Blueprint, request, jsonify
from backend.models import Usuario, Pagamento
from backend.utils.excel_utils import carregar_dados_usuario, salvar_dados_pagamento

routes = Blueprint('routes', __name__)

@routes.route('/login', methods=['POST'])
def login():
    data = request.json
    nome_usuario = data.get('nome_usuario')
    senha = data.get('senha')
    
    usuarios = carregar_dados_usuario()
    usuario = next((u for u in usuarios if u.nome_usuario == nome_usuario and u.senha == senha), None)
    
    if usuario:
        return jsonify({'mensagem': 'Login bem-sucedido', 'id_usuario': usuario.id}), 200
    else:
        return jsonify({'mensagem': 'Credenciais inválidas'}), 401

@routes.route('/pagamentos', methods=['POST'])
def salvar_pagamento():
    data = request.json
    pagamento = Pagamento(**data)
    salvar_dados_pagamento(pagamento)
    return jsonify({'mensagem': 'Dados de pagamento salvos com sucesso'}), 201

@routes.route('/pagamentos', methods=['GET'])
def obter_pagamentos():
    # Lógica para recuperar registros de pagamento iria aqui
    return jsonify({'mensagem': 'Funcionalidade de recuperar registros de pagamento não implementada ainda'}), 501

@routes.route('/parcelas/<int:id_usuario>', methods=['GET'])
def obter_parcelas(id_usuario):
    # Lógica para calcular parcelas pendentes iria aqui
    return jsonify({'mensagem': 'Funcionalidade de calcular parcelas pendentes não implementada ainda'}), 501