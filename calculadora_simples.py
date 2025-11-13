def calculadora():
    operacoes = {
        '+': lambda x, y: x + y,
        '-': lambda x,y: x - y,
        '*': lambda x,y: x * y,
        '/': lambda x,y: x / y if y != 0 else 'Divisão por zero não é permitida'

    }

    try:
        num1 = float(input('Digite o primeiro número: '))
        operador = input('Digire a operação (+, -, *, /):')
        num2 = float(input('Digite o segundo número: '))

        if operador in operacoes:

            funcao_calculo = operacoes[operador]
            resultado = funcao_calculo(num1,num2)
            print(f"\nResultado: {num1} {operador} {num2} = {resultado}")
        else:
            print("\nErro: Operador inválido. Use +, -, * ou /.")

    except ValueError:
        print("\nErro: Entrada inválida. Certifique-se de digitar números válidos.")
    except Exception as e:
        print(f"\nOcorreu um erro inesperado: {e}")

if __name__ == '__main__':
    calculadora()
