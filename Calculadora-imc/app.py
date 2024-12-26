def exibir_nome_programa():
    print('---CALCULADORA DE IMC---')

def calcular_imc():
    try:
        peso = float(input("\nDigite o seu peso (em kg): "))
        altura = float(input("\nDigite a sua altura (em metros): "))
        
        if peso <= 0 or altura <= 0:
            print("\nPor favor, insira valores maiores que zero.")
            return None

        imc = peso / (altura ** 2)
        return imc
    except ValueError:
        print("\nErro: Por favor, insira valores numéricos válidos.")
        return None

def classificar_imc(imc):
    if imc < 18.5:
        return "Abaixo do peso"
    elif 18.5 <= imc < 24.9:
        return "Peso normal"
    elif 25 <= imc < 29.9:
        return "Sobrepeso"
    elif 30 <= imc < 34.9:
        return "Obesidade grau 1"
    elif 35 <= imc < 39.9:
        return "Obesidade grau 2"
    else:
        return "Obesidade grau 3"

def main():
    exibir_nome_programa()
    imc = calcular_imc()
    if imc is not None:
        print(f"\nSeu IMC é: {imc:.2f}")
        classificacao = classificar_imc(imc)
        print(f"Classificação: {classificacao}")

if __name__ == "__main__":
    main()