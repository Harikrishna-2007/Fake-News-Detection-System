import pandas as pd

# Load datasets
fake = pd.read_csv("data/Fake.csv")
true = pd.read_csv("data/True.csv")

# Display record counts
print("Fake News Records:", len(fake))
print("Real News Records:", len(true))

# Display columns
print("\nColumns in Fake Dataset:")
print(fake.columns)

print("\nColumns in Real Dataset:")
print(true.columns)

# Add labels
fake["label"] = 0
true["label"] = 1

# Combine datasets
news = pd.concat([fake, true])

# Save combined dataset
news.to_csv("data/news.csv", index=False)

print("\nCombined Dataset Shape:", news.shape)
print("Dataset Combined Successfully!")