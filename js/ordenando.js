// Função swap para trocar de posição um ou mais elementos
const swap = (arr, pos1, pos2) => {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
};

const trocarPosicoes = () => {
  const vetor = document
    .getElementById("vetorTroca")
    .value.split(",")
    .map(Number);
  const pos1 = parseInt(document.getElementById("pos1").value);
  const pos2 = parseInt(document.getElementById("pos2").value);

  swap(vetor, pos1, pos2);

  const ulElement = document.getElementById("valoresTroca");

  // Limpa a lista antes de adicionar os novos elementos
  ulElement.innerHTML = "";

  vetor.forEach((valor) => {
    const liElement = document.createElement("li");
    liElement.textContent = valor;
    ulElement.appendChild(liElement);
  });
};

// Função shuffle para embaralhar o vetor
const shuffle = (arr, numSwaps) => {
  for (let i = 0; i < numSwaps; i++) {
    const pos1 = Math.floor(Math.random() * arr.length);
    const pos2 = Math.floor(Math.random() * arr.length);
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  }
};

const embaralhar = () => {
  const vetor = document.getElementById("vetor").value.split(",").map(Number);
  const numSwaps = parseInt(document.getElementById("numSwaps").value);

  shuffle(vetor, numSwaps);

  const ulElement = document.getElementById("valores");

  // Limpa a lista antes de adicionar os novos elementos
  ulElement.innerHTML = "";

  vetor.forEach((valor) => {
    const liElement = document.createElement("li");
    liElement.textContent = valor;
    ulElement.appendChild(liElement);
  });
};

//   Função bubble_sort para ordenar números inteiro
const ordenar = () => {
  const inputVetor = document.getElementById("vetorOrdenado").value;
  const vetor = inputVetor.split(",").map((x) => parseInt(x));
  bubble_sort(vetor);

  const ulElement = document.getElementById("valoresOrdenadoBubble");

  // Limpa a lista antes de adicionar os novos elementos
  ulElement.innerHTML = "";

  vetor.forEach((valor) => {
    const liElement = document.createElement("li");
    liElement.textContent = valor;
    ulElement.appendChild(liElement);
  });
};

const bubble_sort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

// Função selection_sort para ordenar números inteiros
const ordenarSelection = () => {
  const inputVetor = document.getElementById("vetorSelection").value;
  const vetor = inputVetor.split(",").map((x) => parseInt(x));
  selection_sort(vetor);
  const ulElement = document.getElementById("valoresOrdenadoSelection");

  // Limpa a lista antes de adicionar os novos elementos
  ulElement.innerHTML = "";

  vetor.forEach((valor) => {
    const liElement = document.createElement("li");
    liElement.textContent = valor;
    ulElement.appendChild(liElement);
  });
};

const selection_sort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
  }
};

//   Função quick_sort para ordenar números inteiros
const quick_sort = (arr, left, right) => {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quick_sort(arr, left, pivot - 1);
    quick_sort(arr, pivot + 1, right);
  }
};

const partition = (arr, left, right) => {
  const pivotValue = arr[right];
  let pivotIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }
  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
  return pivotIndex;
};

const sortArray = () => {
  const inputArray = document.getElementById("vetorQuick").value.split(",");
  const arr = inputArray.map((x) => parseInt(x));
  quick_sort(arr, 0, arr.length - 1);
  const ulElement = document.getElementById("valoresOrdenadoQuick");

  // Limpa a lista antes de adicionar os novos elementos
  ulElement.innerHTML = "";

  arr.forEach((valor) => {
    const liElement = document.createElement("li");
    liElement.textContent = valor;
    ulElement.appendChild(liElement);
  });
};

// Função usando o pivot

const particionamento = (arr, start, end, pivot) => {
  let pivotIndex = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }
  return pivotIndex;
};

const particionar = (event) => {
  event.preventDefault();
  const vetor = document
    .getElementById("vetorParticionado")
    .value.split(",")
    .map((n) => Number(n));
  const inicio = Number(document.getElementById("posicaoInicial").value);
  const fim = Number(document.getElementById("posicaoFim").value);
  const pivo = Number(document.getElementById("pivo").value);

  const pivotIndex = particionamento(vetor, inicio, fim, pivo);

  const ulElement = document.getElementById("valorParticionado");

  // Limpa a lista antes de adicionar os novos elementos
  ulElement.innerHTML = "";

  vetor.forEach((valor) => {
    const liElement = document.createElement("li");
    liElement.textContent = valor;
    ulElement.appendChild(liElement);
  });

  document.getElementById(
    "valorPivo"
  ).textContent = `Posição do pivô: ${pivotIndex}`;
};
