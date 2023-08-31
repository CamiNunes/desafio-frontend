***Projeto Desafio para Entrevista***

- Esse projeto foi desenvolvido em:
  -  .Net 6
  -  Dapper

Para rodar o projeto no banco de dados SQL:
-
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO

    CREATE TABLE [dbo].[Clientes](
        [ClienteId] [uniqueidentifier] NOT NULL,
        [Nome] [varchar](250) NOT NULL,
        [Email] [varchar](250) NOT NULL,
        [LogoTipo] [varchar](255) NULL,
    PRIMARY KEY CLUSTERED 
    (
        [ClienteId] ASC
    )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY]
    GO

    ALTER TABLE [dbo].[Clientes] ADD  DEFAULT (newid()) FOR [ClienteId]
    GO

    ALTER TABLE [dbo].[Clientes] ADD  DEFAULT ('') FOR [Nome]
    GO

    ALTER TABLE [dbo].[Clientes] ADD  DEFAULT ('') FOR [Email]
    GO

    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO
--------------
    CREATE TABLE [dbo].[Logradouros](
        [LogradouroId] [uniqueidentifier] NOT NULL,
        [ClienteId] [uniqueidentifier] NULL,
        [Tipo] [varchar](10) NOT NULL,
        [Endereco] [varchar](255) NOT NULL,
        [Numero] [varchar](10) NOT NULL,
        [Complemento] [varchar](255) NULL,
        [Bairro] [varchar](255) NOT NULL,
        [Cidade] [varchar](255) NOT NULL,
        [UF] [varchar](2) NOT NULL,
        [Cep] [varchar](20) NULL,
    PRIMARY KEY CLUSTERED 
    (
        [LogradouroId] ASC
    )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY]
    GO

    ALTER TABLE [dbo].[Logradouros] ADD  DEFAULT (newid()) FOR [LogradouroId]
    GO

    ALTER TABLE [dbo].[Logradouros] ADD  DEFAULT ('') FOR [Tipo]
    GO

    ALTER TABLE [dbo].[Logradouros] ADD  DEFAULT ('') FOR [Endereco]
    GO

    ALTER TABLE [dbo].[Logradouros] ADD  DEFAULT ('') FOR [Numero]
    GO

    ALTER TABLE [dbo].[Logradouros] ADD  DEFAULT ('') FOR [Bairro]
    GO

    ALTER TABLE [dbo].[Logradouros] ADD  DEFAULT ('') FOR [Cidade]
    GO

    ALTER TABLE [dbo].[Logradouros] ADD  DEFAULT ('') FOR [UF]
    GO

    ALTER TABLE [dbo].[Logradouros]  WITH CHECK ADD FOREIGN KEY([ClienteId])
    REFERENCES [dbo].[Clientes] ([ClienteId])
    GO
--------------
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO

    CREATE PROCEDURE [dbo].[InsertCliente]
        @ClienteId UNIQUEIDENTIFIER,
        @Nome NVARCHAR(250),
        @Email NVARCHAR(250),
        @LogoTipo NVARCHAR(255)
    AS
    BEGIN
        INSERT INTO Clientes (Nome, Email, LogoTipo)
        VALUES (@Nome, @Email, @LogoTipo)
    END
    GO
--------------
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO

    CREATE PROCEDURE [dbo].[UpdateCliente]
        @ClienteId UNIQUEIDENTIFIER,
        @Nome NVARCHAR(255),
        @Email NVARCHAR(250),
        @LogoTipo NVARCHAR(255)
    AS
    BEGIN
        UPDATE Clientes
        SET Nome = @Nome,
            Email = @Email,
            LogoTipo = @LogoTipo
        WHERE ClienteId = @ClienteId
    END
    GO    
--------------
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO

    CREATE PROCEDURE [dbo].[DeleteClienteELogradouros]
        @ClienteId UNIQUEIDENTIFIER
    AS
    BEGIN
        BEGIN TRANSACTION;

        -- Deletar registros da tabela relacionada
        DELETE FROM Logradouros WHERE ClienteId = @ClienteId;

        -- Deletar registro da tabela principal
        DELETE FROM Clientes WHERE ClienteId = @ClienteId;

        COMMIT;
    END;
    GO
--------------
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO

    CREATE PROCEDURE [dbo].[InsertLogradouro]
        @LogradouroId UNIQUEIDENTIFIER,	
        @ClienteId UNIQUEIDENTIFIER,
        @Cep NVARCHAR(020), 
        @Tipo NVARCHAR(020),
        @Endereco NVARCHAR(250),
        @Numero NVARCHAR(10),
        @Complemento NVARCHAR(255),
        @Bairro NVARCHAR(250),
        @Cidade NVARCHAR(250),
        @UF NVARCHAR(002)
    AS
    BEGIN
        INSERT INTO Logradouros (ClienteId, Cep, Tipo, Endereco, Numero, Complemento, Bairro, Cidade, UF)
        VALUES (@ClienteId, @Cep, @Tipo, @Endereco, @Numero, @Complemento, @Bairro, @Cidade, @UF)
    END
    GO
--------------
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO

    CREATE PROCEDURE [dbo].[UpdateLogradouro]
        @LogradouroId UNIQUEIDENTIFIER,
        @ClienteId UNIQUEIDENTIFIER,
        @Cep NVARCHAR(020),
        @Tipo NVARCHAR(020),
        @Endereco NVARCHAR(250),
        @Numero NVARCHAR(10),
        @Complemento NVARCHAR(250),
        @Bairro NVARCHAR(250),
        @Cidade NVARCHAR(250),
        @UF NVARCHAR(002)
    AS
    BEGIN
        UPDATE Logradouros
        SET Cep = @Cep,
            Tipo = @Tipo,
            Endereco = @Endereco,
            Numero = @Numero,
            Complemento = @Complemento,
            Bairro = @Bairro,
            Cidade = @Cidade,
            UF = @UF
        WHERE ClienteId = @ClienteId AND
            LogradouroId = @LogradouroId
    END
    GO  
--------------
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO

    CREATE PROCEDURE [dbo].[DeleteLogradouro]
        @ClienteId UNIQUEIDENTIFIER,
        @LogradouroId UNIQUEIDENTIFIER
    AS
    BEGIN
        DELETE FROM Logradouros
        WHERE LogradouroId = @LogradouroId AND
            ClienteId = @ClienteId
    END
    GO
--------------
    ***************************************************************
    - Pra Rodar o React, basta entrar na pasta raiz do projeto e dar o comando:
        npm install


