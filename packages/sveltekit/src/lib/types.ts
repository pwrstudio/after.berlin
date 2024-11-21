type Span = {
    text: string;
    _key: string;
    _type: 'span';
    marks: string[];
};

type Block = {
    markDefs: any[]; // Replace 'any' with a more specific type if available
    children: Span[];
    _type: 'block';
    style: string;
    _key: string;
};

type ContentEditor = {
    _type: 'contentEditor';
    content: Block[];
};

type Slug = {
    current: string;
    _type: 'slug';
};