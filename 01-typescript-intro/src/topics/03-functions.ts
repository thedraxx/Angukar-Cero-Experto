function sum(a: number, b: number): number {
    return a + b;
}

const result = sum(2, 3);
console.log(result); // Output: 5

interface Player {
    name: string;
    pv: number;
    showPv: () => void;
}



const heal = (player: Player, points: number): Player => {
    player.pv += points;
    return player;
}

const player: Player = {
    name: 'Strider',
    pv: 50,
    showPv() {
        console.log('Puntos de vida: ', this.pv);
    }
}

heal(player, 20);



export {}