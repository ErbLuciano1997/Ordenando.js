// Função swap para trocar de posição um ou mais elementos

const swap = (arr, pos1, pos2) => {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
};

const trocarPosicoes = () => {
  const vetor = document.getElementById("vetor").value.split(",").map(Number);
  const pos1 = parseInt(document.getElementById("pos1").value);
  const pos2 = parseInt(document.getElementById("pos2").value);

  swap(vetor, pos1, pos2);

  document.getElementById(
    "resultado"
  ).innerHTML = `Vetor após a troca: ${vetor}`;
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

  document.getElementById(
    "resultado"
  ).innerHTML = `Vetor embaralhado: ${vetor}`;
};

//   Função bubble_sort para ordenar números inteiros

const ordenar = () => {
  const inputVetor = document.getElementById("vetor").value;
  const vetor = inputVetor.split(",").map((x) => parseInt(x));
  bubble_sort(vetor);
  document.getElementById("resultado").textContent = "Vetor ordenado: " + vetor;
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
  const inputVetor = document.getElementById("vetor").value;
  const vetor = inputVetor.split(",").map((x) => parseInt(x));
  selection_sort(vetor);
  document.getElementById("resultado").textContent = "Vetor ordenado: " + vetor;
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
  const inputArray = document.getElementById("vetor").value.split(",");
  const arr = inputArray.map((x) => parseInt(x));
  quick_sort(arr, 0, arr.length - 1);
  document.getElementById("resultado").innerHTML = arr;
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
    const vetor = document.getElementById("vetor").value.split(",").map((n) => Number(n));
    const inicio = Number(document.getElementById("inicio").value);
    const fim = Number(document.getElementById("fim").value);
    const pivo = Number(document.getElementById("pivo").value);

    const pivotIndex = particionamento(vetor, inicio, fim, pivo);

    document.getElementById("resultado").textContent = `Vetor particionado: ${vetor}\nPosição do pivô: ${pivotIndex}`;
  };
