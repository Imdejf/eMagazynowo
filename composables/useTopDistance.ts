export const useTopDistance = () => {
    const distance = (el: HTMLElement) => {
        return window.pageYOffset + el.getBoundingClientRect().top
    }

    return {
        distance
    }
}
  