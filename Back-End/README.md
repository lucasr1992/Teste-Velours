## Project Setup:
npm install


## Compile and Hot-Reload for Development:
npm run start


## Script SQL criar Data Base:
CREATE SCHEMA `veloursdb` DEFAULT CHARACTER SET utf8 ;


## Script SQL criar tabela de dados:
CREATE TABLE `veloursdb`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cod_produto` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  `valor` DOUBLE NOT NULL,
  `qnt_estoque` INT NOT NULL,
  PRIMARY KEY (`id`, `cod_produto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


## Configuração do MongoDB local:
MONGO_HOST = mongodb://127.0.0.1:27017
MONGO_DATABASE = veloursmongo

## Arquivo de configuração do banco de dados:
settings.env

