import os

def rename_jpeg_files(file_list):
    for i, file_name in enumerate(file_list):
        if file_name.lower().endswith('.jpeg') or file_name.lower().endswith('.jpg'):
            new_name = str(i) + '.jpeg'
            os.rename(file_name, new_name)
            print(f"Renamed {file_name} to {new_name}")
        else:
            print(f"Skipping {file_name}: Not a JPEG file")

# Provide the directory path where the JPEG files are located
directory = r'C:\Users\hp\Desktop\de\masterPortfolio-master\src\assests\images\projects\project0_mobile'

# Get the list of files in the directory
file_list = os.listdir(directory)

# Rename the JPEG files in the directory
rename_jpeg_files(file_list)
