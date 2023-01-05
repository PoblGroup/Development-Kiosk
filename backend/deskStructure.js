import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title('Content')
    .items(
        S.documentTypeListItems().filter(
            item => item.getId() !== 'media.tag'
          )
    )