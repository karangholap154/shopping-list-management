import React, { useState } from 'react';
import { CreditCard as Edit2, Trash2, Save, X, Package } from 'lucide-react';
import { deleteItem, updateItem } from '../services/api';

const ItemCard = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [category, setCategory] = useState(item.category);

  const handleDelete = async () => {
    await deleteItem(item.id);
    onDelete(item.id);
  };

  const handleUpdate = async () => {
    const updatedItem = { name, quantity, category };
    const res = await updateItem(item.id, updatedItem);
    onUpdate(res.data);
    setIsEditing(false);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
      {isEditing ? (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Edit2 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Edit Shopping Item</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Shopping Item</label>
              <input
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Quantity</label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
            <input
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium shadow-lg"
              onClick={handleUpdate}
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white/80 text-slate-700 rounded-xl hover:bg-white transition-all duration-200 font-medium border border-slate-200"
              onClick={() => setIsEditing(false)}
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">{item.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{item.category || 'Uncategorized'}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{item.quantity}</div>
              <div className="text-sm text-slate-500">needed</div>
            </div>
          </div>
          
          <div className="flex gap-3 pt-2">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 text-sm font-medium border border-blue-200"
              onClick={() => setIsEditing(true)}
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 rounded-xl hover:from-red-100 hover:to-pink-100 transition-all duration-200 text-sm font-medium border border-red-200"
              onClick={handleDelete}
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemCard;
