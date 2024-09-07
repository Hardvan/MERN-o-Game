import FileHarvestor

if __name__ == '__main__':
    FileHarvestor.read_files(file_list=[
        "./backend/server.js",
        "./frontend/src/App.js",
        "./frontend/src/components/VideoGameCard.js",
        "./frontend/src/components/ReviewInput.js",
    ])
