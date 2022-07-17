const quotes = [
    {
        quote : "황금별이 떨어질때면 세상을 향해서 여행을 떠나야해 \n",
        author : " - 모차르트",
    },
    {
        quote : "니가 말해주는 미래가 내 앞에 펼쳐지지 않는다 하여도, 어차피 그날의 너를 만나지 못했다면 다시 사는 인생도 없었을거야 \n",
        author : " - 프랑켄슈타인",
    },
    {
        quote : "한계는 무너졌어 내 길을 갈거야. 시도하기 전에 그 누구도 알 수 없어. \n",
        author : " - 위키드",
    },
    {
        quote : "각오했어 나의 희생. 난 정의로운 세상을 내 손으로 만들거야 끝까지. \n",
        author : " - 데스노트",
    },
    {
        quote : "하늘 끝에 닿고 싶은 인간은 유리와 돌 위에 그들의 역사를 쓰지 \n",
        author : " - 노트르담드파리",
    },
    {
        quote : "당신과 같은 심장으로 숨을 쉬고, 당신과 같은 마음으로 꿈을 꾸는, 하지만 결국 당신과 다른, 당신이 아닌 사람 \n",
        author : " - 레드북",
    },
    {
        quote : "한겨울에 비바람이 거칠게 휘몰아쳐도 위대한 거인들과 맞서리라 \n",
        author : " - 시라노",
    },
    {
        quote : "그 순간 초연한 바다는 그저 흘러가도록 날 내버려 뒀네 \n",
        author : " - 랭보",
    },
    {
        quote : "만약 텅 빈 숲속에서 떨어지게 된다면, 홀로 남은 그순간 누가 알기는 할까 \n",
        author : " - 디어에반헨슨",
    },
    {
        quote : "잃어본 적 없는 사람은 몰라. 전부를 잃고 남은게 하나라면, 그 하나를 위해 나 전부를 걸어 \n",
        author : " - 호프",
    }
]
const span = document.getElementById("quote");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

span.style.color = "white";
span.style.fontSize = "1.5em";
span.style.display = "flex";
span.style.alignItems = "center";
span.style.justifyContent = "center";

//Math.random():random()은 0부터 1사이의 랜덤한 숫자를 제공한다.
//Math.random() * 10 : 0부터 10사이의 핸덞한 숫자를 제공 -> but, 소수점 꼬리가 붙음
//Math.round(반올림), Math.ceil(올림), Math.floor(내림)

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;