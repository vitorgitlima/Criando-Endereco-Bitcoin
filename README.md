# Criando um Endereço Bitcoin do Zero

Este é um programa básico em Node.js que demonstra como criar um endereço Bitcoin a partir do zero, passando pelos seguintes passos:

1. **Gerando Chaves Privadas**
   
   - Utilizamos bibliotecas de criptografia para gerar chaves privadas seguras.
   - As chaves privadas são strings aleatórias que são a base para a segurança das transações Bitcoin.

2. **Gerando WIF (Wallet Import Format)**
   
   - Convertendo as chaves privadas em um formato mais legível e fácil de usar, conhecido como Wallet Import Format (WIF).
   - O WIF é uma representação codificada da chave privada que é usada para importar a chave para diferentes carteiras Bitcoin.

3. **Curvas Elípticas no Bitcoin - Gerando Chaves Públicas**
   
   - Utilizando curvas elípticas para calcular as chaves públicas a partir das chaves privadas.
   - As chaves públicas são necessárias para criar um endereço Bitcoin.

4. **O Nascimento do Endereço Bitcoin!**
   
   - Finalmente, combinamos a chave pública com outras informações para criar o endereço Bitcoin.
   - O endereço Bitcoin é a representação codificada que permite que outros usuários enviem Bitcoins para essa carteira.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução de JavaScript que permite o desenvolvimento do lado do servidor.
- **CryptoJS**: Biblioteca de criptografia em JavaScript que oferece vários algoritmos criptográficos.
- **bs58**: Biblioteca para codificar e decodificar dados usando o Base58Check.
- **bitcoinjs-lib**: Biblioteca para interagir com a rede Bitcoin, incluindo a criação de chaves e endereços.

## Referência

Assista esta [Paylist do Tiago Salem](https://www.youtube.com/watch?v=RITeGob-eb0&list=PLmDINmHIqrRqtnm0zzdoUm7GTXaEwFgG_) para uma explicação detalhada sobre como este programa foi desenvolvido.


## Pré-requisitos

- Node.js instalado na máquina.

## Como Executar o Programa

1. Instale as dependências do projeto:

    ```
    npm install
    ```

2. Execute o programa, passando a chave privada como argumento de linha de comando:

    ```
    node 4-gera-endereco-bitcoin.js SUA_CHAVE_PRIVADA
    ```

    Substitua `SUA_CHAVE_PRIVADA` pela chave privada que deseja usar.

![image](https://github.com/vitorgitlima/Criando-Endereco-Bitcoin/assets/50456932/bfa201fa-a237-49f5-9831-df23e6829270)


   
