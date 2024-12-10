import os

restaurantes = [{'nome':'Mc Donalds', 'categoria': 'Fast Food', 'ativo': True},
                {'nome':'Burguer King', 'categoria': 'Fast Food', 'ativo': True},
                {'nome':'Supremo Sushi', 'categoria': 'Comida Japonesa', 'ativo': True},
                {'nome':'Fina Massas', 'categoria': 'Comida Italiana', 'ativo': True}]

# Funções
def voltar_ao_menu_principal():
    input('\nDigite Enter para voltar ao menu principal ')
    main()

def cadastrar_restaurante():
    os.system('cls')
    print('Cadastro de novos restaurantes\n')
    nome_do_restaurante = input('Digite o nome do restaurante: ')
    categoria = input('Digite a categoria: ')
    dados_do_restaurante = {'nome':nome_do_restaurante, 'categoria':categoria, 'ativo':False}
    restaurantes.append(dados_do_restaurante)
    print(f'O restaurante {nome_do_restaurante} foi cadastrado com sucesso!\n')
    voltar_ao_menu_principal()
    
def listar_restaurante():
    os.system('cls')
    print('Listando restaurantes\n')
    print(f'{'Nome do restaurante'.ljust(22)} | {'Categoria'.ljust(20)} | {'Status'}')
    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        categoria = restaurante['categoria']
        ativo = 'Ativado' if restaurante['ativo'] else 'Desativado'
        print(f'- {nome_restaurante.ljust(20)} | {categoria.ljust(20)} | {ativo}')
    voltar_ao_menu_principal()

def ativar_restaurante():
    os.system('cls')
    print('Ativar/Desativar restaurantes\n')
    nome_restaurante = input('Digite o nome do restaurante que deseja Ativar/Desativar: ')
    restaurante_encontrado = False
    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['ativo'] = not restaurante['ativo']
            mensagem = f'O restaurante {nome_restaurante} foi ativado com sucesso.' if restaurante['ativo'] else f'O restaurante {nome_restaurante} foi desativado com sucesso.'
            print(mensagem)
    if not restaurante_encontrado:
        print('O restaurante não foi encontrado.')
    voltar_ao_menu_principal()

def encerrar():
   os.system('cls')
   print('Encerrando...\n')

def opcao_invalida():
    print('Opção Invalida')
    voltar_ao_menu_principal()

# Menu Inicial
def exibir_menu():
    print("""

░██████╗░█████╗░██████╗░░█████╗░██████╗░  ███████╗██╗░░██╗██████╗░██████╗░███████╗░██████╗░██████╗
██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗  ██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
╚█████╗░███████║██████╦╝██║░░██║██████╔╝  █████╗░░░╚███╔╝░██████╔╝██████╔╝█████╗░░╚█████╗░╚█████╗░
░╚═══██╗██╔══██║██╔══██╗██║░░██║██╔══██╗  ██╔══╝░░░██╔██╗░██╔═══╝░██╔══██╗██╔══╝░░░╚═══██╗░╚═══██╗
██████╔╝██║░░██║██████╦╝╚█████╔╝██║░░██║  ███████╗██╔╝╚██╗██║░░░░░██║░░██║███████╗██████╔╝██████╔╝
╚═════╝░╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝  ╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚═════╝░      
""")

    print('1. Cadastrar restaurante')
    print('2. Listar restaurante')
    print('3. Ativar/Desativar restaurante')
    print('4. Sair')
    try:
        opcao_escolhida = int(input('Escolha uma opção: '))
        if opcao_escolhida == 1:
            cadastrar_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurante()
        elif opcao_escolhida == 3:
            ativar_restaurante()
        elif opcao_escolhida == 4:
            encerrar()
        else:
            opcao_invalida()
    except:
        opcao_invalida()

# Definir o arquivo main
def main():
    os.system('cls')
    exibir_menu()

if __name__ == '__main__':
    main()