#!/bin/bash

# Check if the directory argument is provided
if [ -z "$1" ]; then
    echo "Please provide the directory containing .tif files as an argument."
    exit 1
fi

# Set the input directory from the argument
input_dir="$1"
output_dir="$input_dir/output"

# Create the output directory if it doesn't exist
mkdir -p "$output_dir"

# Loop through all .tif files in the input directory
for tif_file in "$input_dir"/*.tif; do
    # Check if there are no .tif files
    if [ ! -e "$tif_file" ]; then
        echo "No .tif files found in the directory."
        exit 1
    fi

    # Get the filename without extension
    filename=$(basename "$tif_file" .tif)
    
    # Convert .tif to .png using ffmpeg
    ffmpeg -i "$tif_file" "$output_dir/$filename.png"
done

echo "Conversion complete!"
