import json

# Load the JSON data
with open('slither_report.json', 'r') as f:
    data = json.load(f)

# Check if the 'results' and 'detectors' keys exist and are correctly structured
if isinstance(data, dict) and 'results' in data and isinstance(data['results'], dict):
    detectors = data['results'].get('detectors', [])
    
    with open('custom_slither_report.md', 'w') as f:
        for detector in detectors:
            description = detector.get('description', 'No Description')
            impact = detector.get('impact', 'No Impact')
            confidence = detector.get('confidence', 'No Confidence')

            f.write(f"## Detector Report\n\n")
            f.write(f"**Impact:** {impact}\n")
            f.write(f"**Confidence:** {confidence}\n\n")
            f.write(f"{description}\n\n")
            
            f.write(f"### Elements:\n")
            for element in detector.get('elements', []):
                if isinstance(element, dict):
                    name = element.get('name', 'Unnamed')
                    file = element.get('source_mapping', {}).get('filename_short', 'Unknown')
                    lines = element.get('source_mapping', {}).get('lines', [])
                    line_range = f"{lines[0]}-{lines[-1]}" if lines else 'Unknown'

                    f.write(f"- **Element:** {name}\n")
                    f.write(f"  - **File:** {file}\n")
                    f.write(f"  - **Lines:** {line_range}\n\n")
            
            f.write("\n---\n")

else:
    print("Unexpected data format:", data)
