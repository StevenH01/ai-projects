import openai

openai.api_key=""

completion = openai.ChatCompletion.create(model="gpt3.5-turbo", messages=[{ "role": "user", "content": "Write an essay about sleeping"}])
print(completion.choices[0].message.content)