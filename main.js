const line1 = document.querySelector('.line1');
        const line2 = document.querySelector('.line2');

        function getDivCenterCoordinates(div) {
            const rect = div.getBoundingClientRect(); // Get the dimensions and position
            const centerX = rect.left + rect.width / 2; // X coordinate of the center
            const centerY = rect.top + rect.height / 2; // Y coordinate of the center
            return { centerX, centerY };
        } 

        function rotateLine(line, event, cX, cY) {
            const mouseX = event.clientX; // Get mouse X position
            const mouseY = event.clientY; // Get mouse Y position

            let deltaX = cX - mouseX;
            let deltaY = cY - mouseY;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Calculate angle in degrees
            line.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`; // Apply rotation to each line
        }

        // Attach the event listener to the document
        document.addEventListener('mousemove', (e) => {
            const { centerX: center1X, centerY: center1Y } = getDivCenterCoordinates(document.querySelector('.inner-circle1'));
            const { centerX: center2X, centerY: center2Y } = getDivCenterCoordinates(document.querySelector('.inner-circle2'));

            rotateLine(line1, e, center1X, center1Y);
            rotateLine(line2, e, center2X, center2Y);
        });