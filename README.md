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

## Referências

Assista esta [Paylist do Tiago Salem](https://www.youtube.com/watch?v=RITeGob-eb0&list=PLmDINmHIqrRqtnm0zzdoUm7GTXaEwFgG_) para uma explicação detalhada sobre como este programa foi desenvolvido.

- Diagrama
https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses
- Lista de prefixos
https://en.bitcoin.it/wiki/List_of_address_prefixes




## Pré-requisitos

- Node.js instalado na máquina.

## Como Executar o Programa

1. Instale as dependências do projeto:

    ```
    npm install
    ```

# Criando um Endereço Bitcoin do Zero

1. **Gerar Chave Privada**

   Execute o programa `1-cria-chaveprivada.js` para gerar uma chave privada:

Anote a chave privada gerada.

2. **Gerar WIF (Wallet Import Format)**

Copie a chave privada gerada no passo anterior e execute o programa `2-gera-wif.js` passando a chave privada como argumento:


3. **Encontrar Chave Pública**

Copie a chave privada gerada no passo 1 e execute o programa `3-gera-chave-publica.js` passando a chave privada como argumento:

`Anote a chave pública gerada.`

4. **Gerar Endereço Bitcoin**

Copie a chave pública gerada no passo anterior e execute o programa `4-gera-endereco-bitcoin.js` passando a chave pública como argumento.
O endereço Bitcoin correspondente será exibido como saída.




   
