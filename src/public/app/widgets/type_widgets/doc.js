import TypeWidget from "./type_widget.js";

const TPL = `<div class="note-detail-doc note-detail-printable">
    <style>
        .note-detail-doc-content {
            padding: 15px;
        }
    </style>
    
    <div class="note-detail-doc-content"></div>
</div>`;

export default class DocTypeWidget extends TypeWidget {
    static getType() { return "doc"; }

    doRender() {
        this.$widget = $(TPL);
        this.$content = this.$widget.find('.note-detail-doc-content');

        super.doRender();
    }

    async doRefresh(note) {
        const docName = note.getLabelValue('docName');

        if (docName) {
            this.$content.load(`app/doc_notes/${docName}.html`);
        } else {
            this.$content.empty();
        }
    }
}