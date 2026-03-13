import { questions, results } from './config.js';

export class QuizManager {
    constructor() {
        this.currentQuestion = 0;
        this.answersGiven = [];
    }

    getCurrentQuestion() {
        return questions[this.currentQuestion];
    }

    nextQuestion(answerType) {
        this.answersGiven[this.currentQuestion] = answerType;
        if (this.currentQuestion < questions.length - 1) {
            this.currentQuestion++;
            return { finished: false };
        }
        return { finished: true, result: this.calculateResult() };
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            return true;
        }
        return false;
    }

    calculateResult() {
        const counts = {};
        this.answersGiven.forEach(t => counts[t] = (counts[t] || 0) + 1);
        const topType = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        return { type: topType, data: results[topType] };
    }

    reset() {
        this.currentQuestion = 0;
        this.answersGiven = [];
    }

    getProgress() {
        return {
            current: this.currentQuestion + 1,
            total: questions.length
        };
    }
}