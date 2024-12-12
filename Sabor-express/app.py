from modelos.restaurante import Restaurante

restaurante_praca = Restaurante('Praça', 'Gourmet')
restaurante_praca.receber_avaliacao('Gui', 10)
restaurante_praca.receber_avaliacao('Lais', 8)
restaurante_praca.receber_avaliacao('Emy', 2)

restaurante_japa = Restaurante('Japa', 'Japonês')
restaurante_japa.receber_avaliacao('Gui', 5)
restaurante_japa.receber_avaliacao('Lais', 9)
restaurante_japa.receber_avaliacao('Emy', 4)

restaurante_massa = Restaurante('Massa', 'Italiano')
restaurante_massa.receber_avaliacao('Gui', 2)
restaurante_massa.receber_avaliacao('Lais', 5)
restaurante_massa.receber_avaliacao('Emy', 9)

def main():
    Restaurante.listar_restaurantes()

if __name__ == '__main__':
    main()