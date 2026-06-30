export interface Page<T> {
    content: T[];
    pageable: {
        currentPage: number;
        elementsOnPage: number;
        nextPage: string;
        previousPage: string;
        totalElements: number;
        totalPages: number;
    }
}