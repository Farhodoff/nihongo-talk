import os, shutil

f1 = "/Users/farhod/Downloads/Telegram Desktop/N1 Shinkanzen master Bunpou.pdf"
f2 = "/Users/farhod/Downloads/JLPT N1 Grammar Master Ebook by JLPTsensei.com.pdf"

if os.path.exists(f1):
    shutil.copy(f1, "books/japanese/N1_Shin_Kanzen_Grammar.pdf")
    print("Copied f1 -> books/japanese/N1_Shin_Kanzen_Grammar.pdf")

if os.path.exists(f2):
    shutil.copy(f2, "books/japanese/N1_JLPTsensei_Grammar.pdf")
    print("Copied f2 -> books/japanese/N1_JLPTsensei_Grammar.pdf")
