function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

function navigateTo(page) {
    window.location.href = page;
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

const startChatBtn = document.getElementById("start-chat");
const chatWindow = document.getElementById("chat-window");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatContent = document.getElementById("chat-content");
const quickQuestions = document.querySelectorAll(".question-btn");

startChatBtn.addEventListener("click", () => {
  chatWindow.classList.toggle("open");
  if (!chatWindow.classList.contains("open")) {
    clearChatHistory(); // Очистка истории чата при закрытии окна
  }
});

sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    appendMessage("Ви", userMessage);
    const response = getBotResponse(userMessage);
    appendMessage("Бот", response);
    userInput.value = "";
  }
});

quickQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const question = btn.textContent;
    appendMessage("Ви", question);
    const response = getBotResponse(question);
    appendMessage("Бот", response);
  });
});

function appendMessage(sender, message) {
  chatContent.innerHTML += `<div><b>${sender}:</b> ${message}</div>`;
  chatContent.scrollTop = chatContent.scrollHeight;
}

function clearChatHistory() {
  chatContent.innerHTML = `<p>Привіт! Я ваш помічник. Виберіть одне з популярних питань або напишіть своє.</p>`;
}

function getBotResponse(input) {
  const responses = {
    "як працює ваш сайт?": "Наш сайт надає доступ до навчальних матеріалів для школярів.",
    "Як робився сайт?": "Сайт робився Лукашовом Владиславом(Project Manager), та також командою. Project Manager робив увесь код сайта. Команда зробила макети та ідею сайту та дізайну.Увесь сайт робився за 5 днів, тому він дуже сирий та з малим функціоналом.",
    "як зв'язатися з підтримкою?": "Зв'язатися з підтримкою можна через бота в телеграмі @tehsupportStudyHub_bot."
  };
  return responses[input.toLowerCase()] || "Вибачте, я не знаю відповіді на це питання.";
}

function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    document.body.className = theme + '-theme';
}

// Установить тему по умолчанию
setTheme('dark');

const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = Array.from({ length: 100 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 2 + 1
}));

function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        flake.y += flake.speed;
        if (flake.y > canvas.height) flake.y = 0;
    });
    requestAnimationFrame(drawSnow);
}
drawSnow();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function toggleMusic() {
    const audio = document.getElementById("background-music");
    const button = document.getElementById("music-toggle");
    if (audio.paused) {
        audio.play();
        button.textContent = "🔇 Выключить музыку";
    } else {
        audio.pause();
        button.textContent = "🔊 Включить музыку";
    }
}
