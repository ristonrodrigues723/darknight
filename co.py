import pyautogui
import time

while True:
    mouse_position = pyautogui.position()
    print(f"Mouse position: x={mouse_position[0]}, y={mouse_position[1]}")
    time.sleep(1)  # Wait for 1 second
