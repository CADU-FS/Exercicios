function queensAttack(n, k, r_q, c_q, obstacles) {
  let top = n - r_q;
  let right = n - c_q;
  let bottom = r_q - 1;
  let left = c_q - 1;

  let topLeft = Math.min(top, left);
  let topRight = Math.min(top, right);
  let bottomRight = Math.min(bottom, right);
  let bottomLeft = Math.min(bottom, left);

  obstacles.forEach(([line, column]) => {

    //left
    if(line === r_q && column < c_q){
      left = Math.min(left, (Math.abs(c_q - column) - 1));
    }

    //top
    if(column === c_q && line > r_q){
      top = Math.min(top, (Math.abs(line - r_q) - 1));
    }

    //right
    if(line === r_q && column > c_q){
      right = Math.min(right, (Math.abs(column - c_q) - 1));
    }

    //bottom
    if(column === c_q && line < r_q){
      bottom = Math.min(bottom, (Math.abs(r_q - line) - 1));
    }

    //topLeft
    if(line > r_q && column < c_q && (Math.abs(r_q - line) === Math.abs(c_q - column))){
      topLeft = Math.min(topLeft, (Math.abs(r_q - line) - 1));
    }

    //topRight
    if(line > r_q && column > c_q && (Math.abs(line - r_q) === Math.abs(c_q - column))){
      topRight = Math.min(topRight, (Math.abs(line - r_q) - 1));
    }

    //bottomRight
    if(line < r_q && column > c_q && (Math.abs(line - r_q) === Math.abs(c_q - column))){
      bottomRight = Math.min(bottomRight, (Math.abs(line - r_q) - 1));
    }

    //bottomLeft
    if(line < r_q && column < c_q && (Math.abs(r_q - line) === Math.abs(column - c_q))){
      bottomLeft = Math.min(bottomLeft, (Math.abs(r_q - line) - 1));
    }
  });

  return (top + right + bottom + left + topRight + topLeft + bottomRight + bottomLeft);
}

/* function queensAttack(n, k, r_q, c_q, obstacles) {   
    const dirs = [
        [0, 1], [0, -1], [1, 0], [-1, 0],  // straight
        [1, 1], [-1, -1], [1, -1], [-1, 1]  // diagonal
    ];
    
    const holes = new Set(
        obstacles.map(([r, c]) => `${r},${c}`));
           
    let attacks = 0;
    
    for (const [dr, dc] of dirs)
    {
        let r = r_q + dr;
        let c = c_q + dc;
        
        while ( r > 0 && r <= n 
                && c > 0 && c <= n 
                && !holes.has(`${r},${c}`)) 
        {
            attacks++;
            r += dr;
            c += dc;
        }
    }
    
    return attacks;
} */

// CÓDIGO ABIAXO NÃO FUNCIONA CORRETAMENTE
/* function getPiecesBySegment(segmentType, r_q, c_q, piecesInSameLineAsQueen) {
	let positionIndexes = []; // Recebe apenas o número do índice i dos arrays de 'piecesInSameLineAsQueen' que estiverem na mesma 'segmentType' da Dama

	if(segmentType == 'column') { // Retorna valores das linhas na mesma coluna
		positionIndexes = Array.from(piecesInSameLineAsQueen, (x) => x[0]);
		if(positionIndexes.length == 0) {
			return [];	
		};
		
		for(let i = 0; i < positionIndexes.length; i++) {
		  if(positionIndexes[i] > r_q) {
				return [positionIndexes[i], positionIndexes[i - 1]];
		  }
	  }
		return positionIndexes;
	} else if (segmentType == 'row') { // Retorna valores das colunas na mesma linha
		positionIndexes = Array.from(piecesInSameLineAsQueen, (x) => x[1]);
		if(positionIndexes.length == 0) {
			return [];	
		};
		
		for(let i = 0; i < positionIndexes.length; i++) {
		  if(positionIndexes[i] > c_q) {
			  return [positionIndexes[i], positionIndexes[i - 1]];
		  }
	  }
		return positionIndexes;
	} else if (segmentType == 'diagonal1') { // Retorna valores das linhas na mesma diagonal (/)
		positionIndexes = Array.from(piecesInSameLineAsQueen, (x) => x[0]);
		if(positionIndexes.length == 0) {
			return [];	
		};

		for(let i = 0; i < positionIndexes.length; i++) {
		  if(positionIndexes[i] > r_q) {
			  return [positionIndexes[i], positionIndexes[i - 1]];
		  }
	  }
		return positionIndexes;
	} else { // Retorna valores das linhas na mesma diagonal (\)
		positionIndexes = Array.from(piecesInSameLineAsQueen, (x) => x[0]);
		if(positionIndexes.length == 0) {
			return [];	
		};
		
		for(let i = 0; i < positionIndexes.length; i++) {
		  if(positionIndexes[i] > r_q) {
			  return [positionIndexes[i], positionIndexes[i - 1]];
		  }
	  }
		return positionIndexes;
	}
} */

/* function queensAttack(n, k, r_q, c_q, obstacles) {
	// PARTE 1 - FORMATANDO 'obstacles'
	let piecesInSameLineAsQueen = []; // Recebe os obstáculos que estão no mesmo seguimento (diagonal, fileira ou coluna) que a Dama
	let closestPieces = []; // Versão filtrada de 'obstacles', mostrando apenas as peças mais próximas em todas as direções
	let nearestPiecesOnSameSegment = []; // contém índices específicos das peças mais próximas de cada lado da Dama em um seguimento específico

	// Colunas
	piecesInSameLineAsQueen = obstacles.filter((x) => x[1] == c_q).sort((a, b) => a[0] - b[0]);
	nearestPiecesOnSameSegment = getPiecesBySegment('column', r_q, c_q, piecesInSameLineAsQueen).filter(Number);
	
	for(let element of nearestPiecesOnSameSegment) {
		closestPieces.push(piecesInSameLineAsQueen.find((x) => x[0] == element));
	}
	
	// Linhas
	piecesInSameLineAsQueen = obstacles.filter((x) => x[0] == r_q).sort((a, b) => a[1] - b[1]);
	nearestPiecesOnSameSegment = getPiecesBySegment('row', r_q, c_q, piecesInSameLineAsQueen).filter(Number);
	
	for(let element of nearestPiecesOnSameSegment) {
		closestPieces.push(piecesInSameLineAsQueen.find((x) => x[1] == element));
	}
	
	// Diagonal '/'
	piecesInSameLineAsQueen = obstacles.filter((x) => Math.abs(x[0] - x[1]) == Math.abs(r_q - c_q) && ((x[0] > r_q && x[1] > c_q) || (x[0] < r_q && x[1] < c_q))).sort((a, b) => a[0] - b[0]);
	nearestPiecesOnSameSegment = getPiecesBySegment('diagonal1', r_q, c_q, piecesInSameLineAsQueen).filter(Number);
	
	for(let element of nearestPiecesOnSameSegment) {
		closestPieces.push(piecesInSameLineAsQueen.sort((a, b) => a[1] - b[1]).find((x) => x[0] == element && (Math.abs(x[0] - x[1]) == Math.abs(r_q - c_q)))); ////////////////////////////////// pode haver erro pela falta de 'x[1] > c_q'
	}
	
	// Diagonal '\'
	piecesInSameLineAsQueen = obstacles.filter((x) => x[0] + x[1] == r_q + c_q && ((x[0] > r_q && x[1] < c_q) || (x[0] < r_q && x[1] > c_q))).sort((a, b) => a[0] - b[0]);
	nearestPiecesOnSameSegment = getPiecesBySegment('diagonal2', r_q, c_q, piecesInSameLineAsQueen).filter(Number);
	
	for(let element of nearestPiecesOnSameSegment) {
		closestPieces.push(piecesInSameLineAsQueen.sort((a, b) => a[1] - b[1]).find((x) => x[0] == element && (x[0] + x[1] == r_q + c_q)));
	}
	
	closestPieces = closestPieces.filter(Boolean); // Remove elementos como 'undefined' e 'null'

	// PARTE 2 - CASAS QUE A DAMA PODE ATACAR SEM OS OBSTÁCULOS
	let queenCanAttack = 0; // Número de casas que a Dama pode atacar

  queenCanAttack += r_q - 1; // Conta para baixo da Dama
  queenCanAttack += c_q - 1; // Conta para esquerda da Dama
  queenCanAttack += n - r_q; // Conta para cima da Dama
  queenCanAttack += n - c_q; // Conta para direita da Dama
  for(let column = c_q + 1, row = r_q + 1; column <= n && row <= n; column++, row++) { // Conta para diagonal cima-direita da Dama
    queenCanAttack += 1;
  }
  for(let column = c_q - 1, row = r_q - 1; column >= 1 && row >= 1; column--, row--) { // Conta para diagonal baixo-esquerda da Dama
    queenCanAttack += 1;
  }
  for(let column = c_q - 1, row = r_q + 1; column >= 1 && row <= n; column--, row++) { // Conta para diagonal cima-esquerda da Dama
    queenCanAttack += 1;
  }
  for(let column = c_q + 1, row = r_q - 1; column <= n && row >= 1; column++, row--) { // Conta para diagonal baixo-direita da Dama
    queenCanAttack += 1;
  }

	// PARTE 3 - LIMITAR AS CASAS QUE A DAMA PODE ATACAR COM OS OBSTÁCULOS
	closestPieces.forEach((x) => {
		if(x[0] == r_q && x[1] > c_q) { // Limita para direita
			queenCanAttack -= (n - x[1] + 1);
		} else if(x[0] == r_q && x[1] < c_q) { // Limita para esquerda
			queenCanAttack -= x[1];
		} else if(x[1] == c_q && x[0] > r_q) { // Limita para cima
			queenCanAttack -= (n - x[0] + 1);
		} else if(x[1] == c_q && x[0] < r_q) { // Limita para baixo
			queenCanAttack -= x[0];
		} else if(Math.abs(x[0] - x[1]) == Math.abs(r_q - c_q) && x[0] > r_q && x[1] > c_q) { // Limita para diagonal cima-direita
			queenCanAttack -= (n - Math.max(x[0], x[1]) + 1);	
		} else if(x[0] - x[1] == r_q - c_q && x[0] < r_q) { // Limita para diagonal baixo-esquerda
			queenCanAttack -= Math.min(x[0], x[1]);
		} else if(x[0] + x[1] == r_q + c_q && x[0] > r_q && x[1] < c_q) { // Limita para diagonal cima-esquerda
			for(let i = x[0], j = x[1]; i <= n && j >= 1; i++, j--) {
				queenCanAttack -= 1;
			}
		} else { // Limita para diagonal baixo-direita
			for(let i = x[0], j = x[1]; i >= 1 && j <= n; i--, j++) {
				queenCanAttack -= 1;
			}
		}
	});
	
	return queenCanAttack;
} */

console.log(queensAttack(8, 20, 4, 5, [[3, 4], [6, 5], [1, 2], [4, 3], [1, 8], [4, 1], [5, 5], [7, 8], [4, 4], [7, 2], [1, 5], [4, 7], [8, 5], [3, 6], [5, 4], [4, 8], [6, 3], [2, 5], [8, 1], [6, 7]]));
console.log(queensAttack(8, 5, 3, 4, [[7, 4], [3, 5], [7, 8], [3, 6], [5, 4]]));
console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]]));
console.log(queensAttack(100, 100, 48, 81, [[54,87], [64,97], [42,75], [32,65], [42,87], [32,97], [54,75], [64,65], [48,87], [48,75], [54,81], [42,81], [45,17], [14,24], [35,15], [95,64], [63,87], [25,72], [71,38], [96,97], [16,30], [60,34], [31,67], [26,82], [20,93], [81,38], [51,94], [75,41], [79,84], [79,65], [76,80], [52,87], [81,54], [89,52], [20,31], [10,41], [32,73], [83,98], [87,61], [82,52], [80,64], [82,46], [49,21], [73,86], [37,70], [43,12], [94,28], [10,93], [52,25], [50,61], [52,68], [52,23], [60,91], [79,17], [93,82], [12,18], [75,64], [69,69], [94,74], [61,61], [46,57], [67,45], [96,64], [83,89], [58,87], [76,53], [79,21], [94,70], [16,10], [50,82], [92,20], [40,51], [49,28], [51,82], [35,16], [15,86], [78,89], [41,98], [70,46], [79,79], [24,40], [91,13], [59,73], [35,32], [40,31], [14,31], [71,35], [96,18], [27,39], [28,38], [41,36], [31,63], [52,48], [81,25], [49,90], [32,65], [25,45], [63,94], [89,50], [43,41]]));