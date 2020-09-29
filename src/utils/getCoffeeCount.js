export const getCoffeeCount = (readTime) => {
    if (readTime < 5) {
        return "☕️";
    }
    if(readTime < 10) {
        return "☕️☕️";
    }
    if(readTime < 20) {
        return "☕️☕️☕️";
    }
    return "☕️☕️☕️☕️";
}