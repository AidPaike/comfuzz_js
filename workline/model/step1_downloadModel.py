# Download model
from transformers import AutoTokenizer, AutoModelForCausalLM

# model_name = "gpt2"
model_name = "distilgpt2"
# model_name = "gpt2-medium"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

model_path = "/root/COMFUZZ/COMFUZZ_js/data/train_model/"
tokenizer.save_pretrained(model_path + model_name)
model.save_pretrained(model_path + model_name)
