import "./collection-preview.styles.scss";
import CollectionItem from '../collection-item/collection-item.component'                    

const PreviewCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h2>{title.toUpperCase()}</h2>
    <div className='preview'>
      {items
        .filter((_, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
