import PyPDF2

with open('public/MANO ARVIND RESUME.pdf', 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    text = ''
    for page in reader.pages:
        text += page.extract_text()
        
with open('resume.txt', 'w', encoding='utf-8') as f:
    f.write(text)
