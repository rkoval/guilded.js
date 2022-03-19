import Collection from "@discordjs/collection";
import type { Client } from "../../structures/Client";

export default class CacheableStructManager<K, V> {
    public cache = new Collection<K, V>();
    constructor(public readonly client: Client) {}
}
