export function getImgUrl(src: string): string {
    return new URL(`../assets/img/${src}.png`, import.meta.url).href;
}