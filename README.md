<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Quiz</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="quiz-container">
        <h1>Quiz Application</h1>
        <div id="question-container">
            <h2 id="question">Question will appear here</h2>
            <div id="answer-buttons" class="btn-grid">
                <!-- Answer buttons will be dynamically created here -->
            </div>
        </div>
        <button id="next-btn" class="next-btn">next</button>
        <div id="result" class="hidden">
            <h2>Quiz Completed!</h2>
            <p>Your final score: <span id="score"></span></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
