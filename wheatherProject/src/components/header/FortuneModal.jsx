import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import LottoGenerator from '../LottoGenerator'; // 로또 컴포넌트 import

export const FortuneModal = ({ fortune, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-white dark:bg-neutral-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-slideUp">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">오늘의 운세</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                        >
                            <IoCloseCircleOutline size={24} />
                        </button>
                    </div>

                    {/* 운세 결과 출력 */}
                    <div className="prose dark:prose-invert max-w-none text-sm leading-6 whitespace-pre-line">
                        {fortune}
                    </div>

                    {/* 행운의 번호 섹션 */}
                    <div className="mt-6 text-center">
                        <LottoGenerator /> {/* 여기서 로또 번호 표시 */}
                    </div>

                    {/* 닫기 버튼 */}
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
