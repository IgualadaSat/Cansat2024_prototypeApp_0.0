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

#Esta app está desactualizada, hay que cambiar la manera de acceder a la api.