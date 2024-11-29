import { createServer } from "node:http";
import { parse } from "node:url";

const users = [
    { id: 1, name: "Rafael" },
    { id: 2, name: "João" },
    { id: 3, name: "Maria" },
    { id: 4, name: "Ana" },
    { id: 5, name: "Carlos" },
    { id: 6, name: "Pedro" },
    { id: 7, name: "Paulo" },
    { id: 8, name: "Lucas" },
    { id: 9, name: "Mateus" },
    { id: 10, name: "Marcos" }
]
const emailCorreto = "breno@email.com";
const senhaCorreta = "123456";

const server = createServer((request, response) => {
    const { pathname, query } = parse(request.url, true)

    if (pathname === "/") {
        response.write("Bem vindo!")
    } else if (pathname === "/login") {
        const { email, senha } = query;

        if (email === emailCorreto && senha === senhaCorreta) {
            response.write("Login efetuado com sucesso!")
        } else {
            response.write("Email ou senha incorretos!")
        }
        response.write("Login")
    } else if (pathname === "/sobre") {
        response.write("Sobre")
    } else if (pathname === "/users") {
        response.write(JSON.stringify(users));
    }

    response.end();
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});