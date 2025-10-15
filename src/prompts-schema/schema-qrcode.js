import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR Code"),

    },
    {
        name: "type",
        description: chalk.yellow("Digite o tipo do QR Code (1) - Normal; (2) - Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas 1 ou 2"),
        required: true
    }
];

export default promptSchemaQRCode