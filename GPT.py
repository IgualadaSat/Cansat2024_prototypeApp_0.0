import openai

api_key = "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"

def interactuar_con_gpt(prompt):
    try:
        response = openai.Completion.create(
            engine="davinci",  
            prompt=prompt,
            max_tokens=50, 
            api_key=api_key
        )
        return response.choices[0].text
    except Exception as e:
        return str(e)

while True:
    entrada = input("Tú: ")
    if entrada.lower() == "q":
        break
    respuesta = interactuar_con_gpt(entrada)
    print("GPT: " + respuesta)

#NO FUNCIONA PORQUE SE NECESITA PAGAR GPT 3.5, 4 o PAGAR POR PROMPTS

#la llave es de mi cuenta, en donde tengo 0.0$ de saldo, osea que no se pueden hacer prompts
#davinci es la versión de gpt3 2021. hay otras dos que son más caras: se cambia en la variable