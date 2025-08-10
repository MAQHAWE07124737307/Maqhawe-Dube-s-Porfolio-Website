# guessinggame.py

import maqhawe

def guessing_game():
    start_time = maqhawe.create_time()
    play_again = "yes"
    attempts = 0

    while play_again.lower() in ["yes", "y"]:
        guess = input("Guess a number between 0 and 10: ")

        if not guess.isdigit():
            print("Please enter a valid number.")
            continue

        guess = int(guess)
        number = maqhawe.generate_random(10)

        if guess == number:
            print("🎉 Congratulations! You guessed the correct number!")
        else:
            print(f"Oops! The correct number was {number}. Better luck next time.")

        play_again = input("Do you want to play again? (yes/no): ")
        attempts += 1

    end_time = maqhawe.create_time()
    duration = maqhawe.calculate_difference(end_time, start_time)

    print(f"\nThanks for playing! You played for {duration.seconds} seconds.")
    maqhawe.output_local_time(end_time)

# Run the game
guessing_game()
