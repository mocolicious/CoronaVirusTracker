import { environment } from 'src/environments/environment';

// Implementing SimulationNodeDatum interface into our custom Node class
export class Node implements d3.SimulationNodeDatum {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    id: string;
    linkCount = 0;

    constructor(id) {
        this.id = id;
    }

    normal = () => {
    return Math.sqrt(this.linkCount / environment.N);
    }

    get r() {
    return 50 * this.normal() + 10;
    }

    get fontSize() {
    return (30 * this.normal() + 10) + 'px';
    }

    get color() {
    let index = Math.floor(environment.SPECTRUM.length * this.normal());
    return environment.SPECTRUM[index];
    }
}