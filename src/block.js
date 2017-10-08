class Block {
    constructor(parentHash, generationHash, timestamp, data) {
        this.parentHash = parentHash;
        this.generationHash = generationHash;
        this.timestamp = timestamp;
        this.data = data;
    }
}