
export function pluralize(strings: TemplateStringsArray, ...expressions: number[]): string {
    const firstString: string = strings[0];
    const pluralizedNoteString: string = expressions[0] === 1 ? "Note" : "Notes";
    return `${firstString} ${expressions[0]} ${pluralizedNoteString}`;
}