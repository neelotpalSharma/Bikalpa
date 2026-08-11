import React, { useState, useMemo } from 'react';
import { Product, ProductCategory, EcoTag } from '../types';
import { PRODUCTS_DATA } from '../data/bikalpaData';
import { ProductModal } from './ProductModal';
import { Star, ShoppingBag, Eye, Leaf, Filter, Check, ArrowUpDown } from 'lucide-react';

interface ProductCatalogProps {
  selectedCategory: ProductCategory;
  setSelectedCategory: (category: ProductCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onAddToCart,
}) => {
  const [selectedTag, setSelectedTag] = useState<EcoTag | 'All'>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories: ProductCategory[] = [
    'All',
    'Skin Care',
    'Hair Care',
    'Home Care',
    'Oral Care',
    'Sustainable Goods',
  ];

  const ecoTags: EcoTag[] = [
    '100% Natural',
    'Sulfate & Paraben Free',
    'Plastic Free',
    'Zero Waste',
    'Handcrafted',
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category match
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Tag match
      if (selectedTag !== 'All' && !product.tags.includes(selectedTag as EcoTag)) {
        return false;
      }
      // Search query match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesSummary = product.summary.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        const matchesTags = product.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesSummary && !matchesCategory && !matchesTags) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [selectedCategory, selectedTag, searchQuery, sortBy]);

  return (
    <section id="shop" className="py-12 md:py-16 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#E3DEC3] px-3.5 py-1 rounded-full text-xs font-bold text-[#2D5A27] uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-[#2D5A27]" />
            <span>Guwahati Botanical Formulations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C3818] tracking-tight">
            Explore Natural Eco Products
          </h2>
          <p className="text-sm text-[#6B7262] mt-2">
            Handcrafted with love in Assam. Zero sulfates, zero parabens, zero microplastics.
          </p>
        </div>

        {/* Filters & Search Controls */}
        <div className="space-y-4 mb-8">
          
          {/* Main Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E3DEC3]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#2D5A27] text-white shadow-sm'
                    : 'bg-[#EFECE1] text-[#4A5240] hover:bg-[#E3DEC3] hover:text-[#1C3818]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sub Filters: Eco Tags & Sorting */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#EFECE1]/70 p-3 rounded-2xl border border-[#DFDAA5]">
            
            {/* Tag Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-bold text-[#6B7262] mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </span>
              <button
                onClick={() => setSelectedTag('All')}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                  selectedTag === 'All'
                    ? 'bg-[#1C3818] text-white'
                    : 'bg-white text-[#4A5240] border border-[#C2BDAA] hover:bg-[#E3DEC3]'
                }`}
              >
                All
              </button>
              {ecoTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                    selectedTag === tag
                      ? 'bg-[#1C3818] text-white'
                      : 'bg-white text-[#4A5240] border border-[#C2BDAA] hover:bg-[#E3DEC3]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#6B7262]" />
              <span className="text-xs font-bold text-[#6B7262]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#C2BDAA] rounded-lg px-2.5 py-1 text-xs font-semibold text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-[#DFDAA5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Badges */}
                <div 
                  className="relative aspect-square overflow-hidden bg-[#EFECE1] cursor-pointer"
                  onClick={() => setActiveModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                    {product.isBestSeller && (
                      <span className="bg-[#D97736] text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                        Best Seller
                      </span>
                    )}
                    <span className="bg-[#2D5A27]/90 text-[#F9F7F2] text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider backdrop-blur-sm">
                      {product.weightVolume}
                    </span>
                  </div>

                  {/* Quick View Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1C3818]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProduct(product);
                      }}
                      className="bg-white text-[#2D5A27] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-[#EFECE1] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#7A8270] mb-1">
                      <span className="font-semibold text-[#2D5A27]">{product.category}</span>
                      <div className="flex items-center gap-0.5 text-[#D97736]">
                        <Star className="w-3 h-3 fill-[#D97736]" />
                        <span className="font-bold">{product.rating}</span>
                      </div>
                    </div>

                    <h3 
                      onClick={() => setActiveModalProduct(product)}
                      className="font-serif text-sm sm:text-base font-bold text-[#1C3818] line-clamp-1 hover:text-[#2D5A27] cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>

                    <p className="text-[11px] text-[#6B7262] line-clamp-2 mt-1 leading-normal">
                      {product.summary}
                    </p>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="pt-3 mt-3 border-t border-[#E3DEC3]/60 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-base font-bold text-[#2D5A27]">
                        ₹{product.price}
                      </div>
                      {product.originalPrice && (
                        <div className="text-[10px] text-[#7A8270] line-through">
                          ₹{product.originalPrice}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => onAddToCart(product, 1)}
                      className="bg-[#2D5A27] hover:bg-[#23481F] text-white p-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 flex items-center gap-1"
                      title="Add to Cart"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#A3C997]" />
                      <span className="hidden xs:inline text-[11px]">Add</span>
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#EFECE1]/50 rounded-3xl border border-[#DFDAA5]">
            <Leaf className="w-10 h-10 text-[#7A8270] mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#1C3818]">No matching products found</h3>
            <p className="text-xs text-[#6B7262] mt-1 max-w-sm mx-auto">
              Try adjusting your category filters or search query to find what you are looking for.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTag('All');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 bg-[#2D5A27] text-white rounded-full text-xs font-bold hover:bg-[#23481F]"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  );
};
